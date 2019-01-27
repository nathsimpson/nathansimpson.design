import React from "react";
import { jsx, css } from "@emotion/core"

/** @jsx jsx */

const Bio = () => (
	<div css={{
		maxWidth: 1100,
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',

		"@media (max-width: 800px)": {
			flexDirection: 'column',
		}
	}}>
		<img src="https://www.nsgd.com.au/filesnathansimpsondesign/chair.jpg" />
		<div style={{ paddingLeft: 16 }}>
			<h2>About Nathan</h2>
			<p>Nathan Simpson is a junior UI Designer and Frontend Developer at <a href="https://www.thinkmill.com.au/" target="_blank">Thinkmill</a> in Sydney, Australia.</p>
			<p>Nathan is a budding entrepreneur, and is interested with smart devices and automation. He would like to create experiences that allow users to monitor and automate their worlds. He would also like to speak at meetups and conferences, and help other up and coming designers and devs make a start to their careers.</p>
			<p>Born in Orange NSW, Nathan was heavily interested with computers, and design from a young age. He got started in the design industry when he was 13, designing logos and posters for family members. It was only a matter of time before he would start learning HTML and CSS, then creating custom Wordpress themes for clients.</p>
			<p>He studied the Bachelor of Design (Visual Communication) at Western Sydney University, where he studied Web and Interactive Design, Data Visualisation, and Programming Fundamentals. He also took an elective at the Sydney School of Entrepreneurship. On the side of university, Nathan learnt Frontend Development technologies like Javascript, Git, and React through Treehouse. Nathan is also a regular attendee at SydJS and React Sydney meetups.</p>
		</div>
	</div >
);

export default Bio;