import React from 'react';
import'./areaSearch.css'
import { useEffect, useState } from 'react';
import Geocode from "react-geocode";

const AreaSearch = ({setAreaInfo}) => {
    const [inputValue, setInputValue] = useState('');
    useEffect(()=>{
        Geocode.setApiKey("AIzaSyCT3jRxA0JFLSIbngt3bu19qfSrheSPOBM");
    },[]);

    const searchAddress =  async(address)=>{
        try{
            const response = await Geocode.fromAddress(address);
            console.log(response)
            if(response.results.length ){
                const { lat, lng } = response.results[0].geometry.location;
                setAreaInfo({lat:String(lat),lng:String(lng)});
            }
        }catch(err){
            console.log(err);
        }
    }

    const onSubmit = (e) =>{
            e.preventDefault();
            if(setAreaInfo !== undefined){
                setAreaInfo(undefined)
            }
            searchAddress(inputValue);
            setInputValue('')
    }

    const onChangeInput = (e) =>{
        setInputValue(e.target.value) ;
    }

    return (
        <div className='searchContainer'>
            <h1>원하는 도시의 날짜를 검색해 보세요</h1>
            <form className='search-from' onSubmit={onSubmit}>
                <input
                 type="text"
                 autoFocus 
                 value={inputValue}
                 onChange={onChangeInput}
                />
                <button>검색</button>
            </form>
        </div>
    );
};

export default AreaSearch;