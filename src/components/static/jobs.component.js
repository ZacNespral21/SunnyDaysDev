import React, { useState, useEffect } from "react";
import { isMobile } from 'react-device-detect';
import { supaBase, LoadingSpinner } from '@core';
import 'assets/styles/jobs.scss';
import NavigationBar from 'components/global/navigation.component';
import FooterDesktop from 'components/global/footer.component';

function JobsStatic() {
  const [jobResults, setJobResults] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    // const url = 'https://chambita-api.zacharynespral.com/api/chambita/jobs/list';
    const fetchData = async () => {
      try {
        const { data, error } = await supaBase
          .from('jobs')
          .select()
        // const response = await fetch(url);
        // const json = await response.json();
        // setJobResults([...json.success]);
        setJobResults(data)
        setSpinner(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return <>
    <NavigationBar />
    <div className="container-fluid p-0 m-0">
      <div className={"hero" + (isMobile ? ' short' : '')}>
        <div className="hero__title">
          <h2>Reliable, Lucrative, Consistant Jobs <br /> From Reputable Employers</h2>
          <h5 className={(isMobile ? 'hide-subtext' : '')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa.</h5>
        </div>
      </div>
    </div>
    <section id="sectionJobList" className="section section-job-list gradient-light--lean-left">
      <div className="container">
        {spinner && <LoadingSpinner />}
        <div className="row row-grid justify-content-center">
          <div className="col-md-10">
            <div className="job-list__wrapper mt-4 mb-6">
              {
                jobResults.map(jobItem => {
                  return <>
                    <a key={jobItem.job_id} href={"/jobs/posting/" + jobItem.job_id} className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                      <div className="card-body">
                        <span className="row justify-content-between align-items-center">
                          <span className="col-4 p-0 color--heading text-start">{jobItem.title}</span>
                          <span className="col-4 p-0 my-sm-0 color--text"><i className="fas fa-clock"></i> {jobItem.type}</span>
                          <span className="col-4 p-0 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt"></i> {jobItem.location}</span>
                        </span>
                      </div>
                    </a>
                  </>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterDesktop />
  </>
}

export default JobsStatic;