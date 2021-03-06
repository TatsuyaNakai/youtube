import React, {useEffect, useState} from 'react';
import axios from 'axios';

const YOUTUBE_SEARCH_API_URL="https://www.googleapis.com/youtube/v3/search?";
const API_KEY="AIzaSyCRAncuGrfRTQIl9XLMzSSgQcyKKb04eEA";

const Api=()=>{
    const [videos, setVideos]=useState([]);

    useEffect(()=>{
        const params={
            key:API_KEY,
            q:"ネコ　かわいい", //検索キーワード
            type:"video", //video, channnel, playListから選択できる
            maxResults:"5", //結果の最大数？取得できる数決められる。
            order:"viewCount", //結果の並び順決定する。（今回でいうと多い順に並べてる。）
        };
        // これが何に対応してるかわからない。URLSearchParamsのところで代入してるから、以下を調べてみる。
        const queryParams=new URLSearchParams(params);
        const asyncFn=async()=>{
            await axios.get(YOUTUBE_SEARCH_API_URL+ queryParams)
            .then((res)=>{
                console.log("API success:", res.data);
                const paramsDate=res.data.items;
                if(paramsDate && paramsDate.length !== 0){
                    // もしデータのitemsと、itemsの長さが0 ではなかった場合。
                    for(let i=0; i<paramsDate.length; i++){
                        const paramsObj=paramsDate[i];
                        console.log(paramsObj.id.videoId);
                        // 配列の中に詰めたい。それをmapでulに並べて動画を複数取得できるようにする。
                        debugger;
                        setVideos([...videos, paramsObj.id.videoId]);
                        console.log(videos);
                    }
                    //変更前
                    // const firstItem = paramsDate[0];
                    // setVideo(firstItem.id.videoId);
                    // console.log(videos);
                }
            }).catch((error)=>{
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
    },[]);

    return (
        <ul>
            {videos.map((video, index)=>(
                <li key={index}>
                    <iframe
                title='ネコ　きゅうり'
                id='player'
                width='640'
                height='360'
                src={`https://www.youtube.com/embed/${video}`}
                // 配列になるから、ここの部分は変更する必要がある。
                frameBorder='0'
                allowFullScreen
            />
                </li>
            ))}
        </ul>
    );
};

export default Api;

