import React, { Component } from 'react'
import '../../assets/styles/invoice.scss';
import NavigationBar from '../global/navigation.component';
export default class Invoice extends Component {  
  render() {
    return (
      <section className="vh-100">
        <NavigationBar />
        <div className="container">
<div className="row gutters">
		<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div className="card">
				<div className="card-body p-0">
					<div className="invoice-container">
						<div className="invoice-header">
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="custom-actions-btns mb-5">
										<a href="/#" className="btn btn-primary">
											<i className="icon-download"></i> Download
										</a>
										<a href="/#" className="btn btn-secondary">
											<i className="icon-printer"></i> Print
										</a>
									</div>
								</div>
							</div>
							<div className="row gutters">
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
									<a href="index.html" className="invoice-logo">
										Bootdey.com
									</a>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<address className="text-right">
										Maxwell admin Inc, 45 NorthWest Street.<br />
										Sunrise Blvd, San Francisco.<br />
										00000 00000
									</address>
								</div>
							</div>
							<div className="row gutters">
								<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
									<div className="invoice-details">
										<address>
											Alex Maxwell<br />
											150-600 Church Street, Florida, USA
										</address>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
									<div className="invoice-details">
										<div className="invoice-num">
											<div>Invoice - #009</div>
											<div>January 10th 2020</div>
										</div>
									</div>													
								</div>
							</div>
						</div>
						<div className="invoice-body">
							<div className="row gutters">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="table-responsive">
										<table className="table custom-table m-0">
											<thead>
												<tr>
													<th>Items</th>
													<th>Product ID</th>
													<th>Quantity</th>
													<th>Sub Total</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														Wordpress Template
														<p className="m-0 text-muted">
															Reference site about Lorem Ipsum, giving information on its origins.
														</p>
													</td>
													<td>#50000981</td>
													<td>9</td>
													<td>$5000.00</td>
												</tr>
												<tr>
													<td>
														Maxwell Admin Template
														<p className="m-0 text-muted">
															As well as a random Lipsum generator.
														</p>
													</td>
													<td>#50000126</td>
													<td>5</td>
													<td>$100.00</td>
												</tr>
												<tr>
													<td>
														Unify Admin Template
														<p className="m-0 text-muted">
															Lorem ipsum has become the industry standard.
														</p>
													</td>
													<td>#50000821</td>
													<td>6</td>
													<td>$49.99</td>
												</tr>
												<tr>
													<td>&nbsp;</td>
													<td>
														<p>
															Subtotal<br />
															Shipping &amp; Handling<br />
															Tax<br />
														</p>
														<h5 className="text-success"><strong>Grand Total</strong></h5>
													</td>			
													<td>
														<p>
															$5000.00<br />
															$100.00<br />
															$49.00<br />
														</p>
														<h5 className="text-success"><strong>$5150.99</strong></h5>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="invoice-footer">
							Thank you for your Business.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
      </section>
    );
  }
}