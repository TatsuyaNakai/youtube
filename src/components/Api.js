import React, {useEffect, useState} from 'react';
// import axios from 'axios';

const YOUTUBE_SEARCH_API_URL="https://www.googleapis.com/youtube/v3/search?";
const API_KEY="AIzaSyDn-CWtgAB0VO5cMHdTbQmAd7isVdvQsmU";

const Api=()=>{
    const [video, setVideo]=useState('');

    useEffect(()=>{
        const params={
            key:API_KEY,
            q:"ヒカキン", //検索キーワード
            type:"video", //video, channnel, playListから選択できる
            maxResults:"1", //結果の最大数？どうゆう意味？
            order:"viewCount", //結果の並び順決定する。（今回でいうと多い順に並べてる。）
        };
        const queryParams=new URLSearchParams(params);
        // const asyncFn=async()=>{
        //     await axios.get(YOUTUBE_SEARCH_API_URL+ queryParams)
        //     .then((res)=>{
        //         console.log("API success:", res);
        //         if(res.items && res.items.length !== 0){
        //             const firstItem = res.items[0];
        //             setVideo(firstItem.id.video);
        //         }
        //     }).catch((error)=>{
        //         console.error(error);
        //     });

        // };
        // asyncFn();

        fetch(YOUTUBE_SEARCH_API_URL + queryParams)
        .then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log('API success: ', result);
            if(result.items && result.items.length !==0 ){
                const firstItem= result.items[0];
                // debugger;
                setVideo(firstItem.id.videoId);
            }
        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    return (
        <>
            <iframe
                title='sample'
                id='player'
                width='640'
                height='360'
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder='0'
                allowFullScreen
            />
        </>
    );
};

export default Api;