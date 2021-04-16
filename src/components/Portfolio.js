import { Link } from "react-router-dom"

const showPortfolio = () => {
	document.getElementById("projects").style.display = "block"
	setTimeout(() => {
		window.scrollBy({ top: 200, right: 0, behavior: "smooth" })
	}, 1000)
}

const Portfolio = () => {
	return (
		<div>
			{/* <!-- ***** Hero Area Start ***** --> */}
			<div className="row">
				<div className="col-sm-6 p-0">
					<img src="img/bg-img/portfolio.jpg" alt="creator" />
				</div>
				<div className="col-sm-6" style={{ backgroundColor: "#232323" }}>
					<div className="mt-5 mb-5 hidden"></div>
					<center>
						<br />
						<br />
						<div className="d-flex justify-content-center mb-3">
							<div className="p-2 ml-5 mr-5 hidden">Flex item 1</div>
							<div className="p-5">
								<div className="m-3" style={{ backgroundColor: "white", height: "1px" }}></div>
								<h2 style={{ color: "white" }}>Take a look at my Portfolio</h2>
								<p style={{ color: "white" }}>
									We strive to give you the best products to make your day
									memorable.
						</p>
							</div>
							<div className="p-2 ml-5 mr-5 hidden">Flex item 3</div>
						</div>
						<Link to="contact" className="btn sonar-btn white-btn">contact me</Link>
						<br />
						<br />
						<br />
					</center>
				</div>
			</div>
			{/* <!-- ***** Hero Area End ***** --> */}

			<center>
				<button id="show-button" className="sonar-btn m-5" onClick={showPortfolio}>show portfolio</button>
			</center>

			{/* <!-- ****** Gallery Area Start ****** --> */}
			<section className="sonar-projects-area" id="projects" style={{ display: "none" }}>
				<div className="container-fluid">
					<div className="row sonar-portfolio">
						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/2.jpg">
								<img src="img/portfolio-img/IMG_20210407_211730_563.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Gachie, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
							data-wow-delay="300ms">
							<a className="gallery-img" href="img/portfolio-img/1.jpg">
								<img src="img/portfolio-img/IMG_20210218_143829_548.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Aboretum, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item product wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/2.jpg">
								<img src="img/portfolio-img/IMG_20210403_150159_526.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Gachie, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
							data-wow-delay="700ms">
							<a className="gallery-img" href="img/portfolio-img/3.jpg">
								<img src="img/portfolio-img/IMG_20210406_214053_685.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kikuyu, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes product wow fadeInUpBig"
							data-wow-delay="300ms">
							<a className="gallery-img" href="img/portfolio-img/5.jpg">
								<img src="img/portfolio-img/IMG_20210329_214826_974.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mwiki, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/6.jpg"><img
								src="img/portfolio-img/IMG_20210327_142635_314.jpg" loading="lazy" alt="" /></a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Somewhere, Siaya</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes product wow fadeInUpBig"
							data-wow-delay="700ms">
							<a className="gallery-img" href="img/portfolio-img/7.jpg"><img
								src="img/portfolio-img/IMG_20210330_165116_110.jpg" loading="lazy" alt="" /></a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mirema, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits studio wow fadeInUpBig"
							data-wow-delay="900ms">
							<a className="gallery-img" href="img/portfolio-img/8.jpg">
								<img src="img/portfolio-img/IMG_20210330_204636_605.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mirema, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
							data-wow-delay="300ms">
							<a className="gallery-img" href="img/portfolio-img/9.jpg">
								<img src="img/portfolio-img/IMG_20210329_143557_416.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kasarani, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/10.jpg">
								<img src="img/portfolio-img/IMG_20210328_220224_702.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kasarani, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes wow fadeInUpBig"
							data-wow-delay="700ms">
							<a className="gallery-img" href="img/portfolio-img/11.jpg">
								<img src="img/portfolio-img/IMG_20210329_162511_163.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kasarani, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item product wow fadeInUpBig"
							data-wow-delay="900ms">
							<a className="gallery-img" href="img/portfolio-img/12.jpg">
								<img src="img/portfolio-img/IMG_20210330_122032_932.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mirema, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ****** Gallery Area End ****** --></br> */}
		</div>
	)
}

export default Portfolio