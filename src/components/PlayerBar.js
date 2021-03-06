import React, {Component} from 'react';

class PlayerBar extends Component {
	
	render() {
		return (
			<section className="player-bar">
				<div className="container  py-3 bg-light rounded">
					<div className="row justify-content-md-center align-items-center">
						<div className="col-md-3">
							<section id="buttons">
								<button id="previous" onClick={this.props.handlePrevClick}>
									<span className="icon ion-md-skip-backward"></span>
								</button>
								<button id="play-pause" onClick={this.props.handleSongClick}>
									<span className={this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play-circle"}></span>
								</button>
								<button id="next" onClick={this.props.handleNextClick}>
									<span className="icon ion-md-skip-forward"></span>
								</button>
							</section>
						</div>
						<div className="col-md-3 m-3">
							<section id="time-control">
								<div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
								<input 
									type="range" 
									className="seek-bar" 
									value={(this.props.currentTime / this.props.duration || 0)}
									min="0"
									max="1.0"
									step="0.01" 
									onChange={this.props.handleTimeChange} />
								<div className="total-time">{this.props.formatTime(this.props.duration)}</div>
							</section>
						</div>

						<div className="col-md-3">
							<section id="volume-control">
								<div className="icon ion-md-volume-low"></div>
								<input 
									type="range" 
									className="seek-bar" 
									value={this.props.volume}
									min="0.0"
									max="1.0"
									step="0.01"
									onChange={this.props.handleVolumeChange} />
								<div className="icon ion-md-volume-high"></div>
							</section>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PlayerBar;