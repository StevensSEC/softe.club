import React from "react";
import { Slide, SlideDeck } from "../../components/SlideDeck/SlideDeck.js";

const SlideDeckDemo: React.FC<any> = () => {
	return (
		<div>
			<SlideDeck>
				<Slide>
					<h1>Slide 1</h1>
				</Slide>
				<Slide>
					<h1>Slide 2</h1>
				</Slide>
				<Slide sticky stickyUntil={5}>
					<h1>Sticky Slide</h1>
					<p>
						I should remain on the left side after you hit next, until slide 5, where I
						should no longer be visible.
					</p>
				</Slide>
				<Slide>
					<h1>Slide 3</h1>
				</Slide>
				<Slide>
					<h1>Slide 4</h1>
				</Slide>
				<Slide>
					<h1>Slide 5</h1>
				</Slide>
				<Slide sticky>
					<h1>Sticky Slide A</h1>
					<p>I will be replaced.</p>
				</Slide>
				<Slide sticky stickyUntil={10}>
					<h1>Sticky Slide B</h1>
					<p>I should replace A.</p>
				</Slide>
				<Slide>
					<h1>Slide 6</h1>
				</Slide>
				<Slide>
					<h1>Slide 7</h1>
				</Slide>
				<Slide>
					<p>
						This is a real long slide. There&apos;s a lot of content here, and yet, you
						can&apos;t scroll down to see the rest... This keeps it feeling more like a
						slide show and less like a webpage.
					</p>
					<h1>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
						porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
						adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
						dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
						ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
						voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
						eum fugiat quo voluptas nulla pariatur?
					</h1>
				</Slide>
			</SlideDeck>
		</div>
	);
};

export default SlideDeckDemo;
