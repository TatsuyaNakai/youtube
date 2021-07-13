import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = "AIzaSyAJn48i_Rf7I_j-eIdYgakeLqUmNBNi1DM";

const useStyles = makeStyles({
	contents: {
		display: "block",
		textAlign: "center",
		margin: "40px auto",
	},
});

const Api = () => {
	const classes = useStyles();
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const params = {
			key: API_KEY,
			q: "ネコ　かわいい", //検索キーワード
			type: "video", //video, channnel, playListから選択できる
			maxResults: "5", //取得できる数決められる。
			order: "viewCount", //結果の並び順決定する。（今回でいうと多い順に並べてる。）
		};
		// これが何に対応してるかわからない。URLSearchParamsのところで代入してるから、以下を調べてみる。
		const queryParams = new URLSearchParams(params);
		const asyncFn = async () => {
			await axios
				.get(YOUTUBE_SEARCH_API_URL + queryParams)
				.then((res) => {
					console.log("API success:", res.data);
					const items = res.data.items;
					// console.log(items); //もうすでに配列が渡ってきてるから、
					const videoIds = items.map((item) => item.id.videoId);
					setVideos([...videoIds]);

					// for (let i = 0; i < items.length; i++) {
					// 	const item = items[i];
					// 	const videoId = item.id.videoId;
					// 	setVideos([...videos, videoId]);
					// 	console.log(videos);
					// 	debugger;
					// }
					// //変更前
					// const firstItem = items[0];
					// setVideos(firstItem.id.videoId);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		asyncFn();

		// fetch(YOUTUBE_SEARCH_API_URL + queryParams)
		// .then((res)=>{
		//     return res.json()
		// }).then((result)=>{
		//     console.log('API success: ', result);
		//     if(result.items && result.items.length !==0 ){
		//         const firstItem= result.items[0];
		//         // debugger;
		//         setVideo(firstItem.id.videoId);
		//     }
		// }).catch((error)=>{
		//     console.log(error);
		// });
	}, []);

	// console.log(videos);
	// debugger;

	return (
		<ul>
			{videos.map((video, index) => (
				<li key={index}>
					<iframe
						title="ネコ　きゅうり"
						id="player"
						width="640"
						height="360"
						src={`https://www.youtube.com/embed/${video}`}
						// 配列になるから、ここの部分は変更する必要がある。
						frameBorder="0"
						allowFullScreen
					/>
				</li>
			))}
		</ul>
		// <iframe
		// 	className={classes.contents}
		// 	title="ネコ　きゅうり"
		// 	id="player"
		// 	width="640"
		// 	height="360"
		// 	src={`https://www.youtube.com/embed/${videos.id.videoId}`}
		// 	// 配列になるから、ここの部分は変更する必要がある。
		// 	frameBorder="0"
		// 	allowFullScreen
		// />

		// <h1>sample</h1>
	);
};

export default Api;
