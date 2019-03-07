import React from 'react';
import './Landing.css';

// This is a functional component

const Landing = () => (
	<section className="landing">

		<div className="hero card bg-dark text-white mb-5 border-0 rounded-0">
			<img className="card-img rounded-0 img-fluid" src='/assets/images/swell.jpeg' alt="Ocean Swell"/>
			<div className="card-img-overlay m-5 d-flex align-items-center justify-content-center">
				<h1 className="hero-title card-title font-weight-bold">Turn the music up!</h1>
			</div>
		</div>
		<section className="selling-points container mb-5">
			<div className="card-deck">
				<div className="card bg-light">
					<div className="card-body">
						<h5 className="point-title card-title mb-4">Choose your music</h5>
						<p className="point-description card-text">The world is full of music; why should you have to listen to music that someone else chose?</p>
					</div>
				</div>
				<div className="card bg-light">
					<div className="card-body">
        				<h5 className="point-title card-title mb-4">Unlimited, streaming, ad-free</h5>
        				<p className="point-description card-text">No arbitrary limits. No distractions.</p>
        			</div>
        		</div>
      			<div className="card bg-light">
					<div className="card-body">
       			 		<h5 className="point-title card-title mb-4">Mobile enabled</h5>
        				<p className="point-description card-text">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        			</div>
        		</div>
	      	</div>	
		</section>
	</section>
);

export default Landing;


