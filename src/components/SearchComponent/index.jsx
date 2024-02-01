import * as React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./SearchComponent.module.scss"
import searchIcon from "../../assets/Search.svg";
import { boxTabStyles } from '../../constants/styles/boxTabStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsListingFree, selectFilter, setResultArr} from '../../slices/filter';
import API from '../../utils/api';
import FilterModal from '../FilterModal';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={boxTabStyles}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const SearchComponent = () => {
  const { isListingFree, sortDirection, bedroomType, bathroomType, conditionType, styleType, minPrice, maxPrice} = useSelector(selectFilter);
    const [value, setValue] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const {pathname} =useLocation();

  
  const getFilteredData = () => {
      const axiosConfig = {
        url: process.env.REACT_APP_HOUSES_API,
        method: 'GET',
         params: { 
          IsListingFree:isListingFree, 
          SortDirection: sortDirection, 
          BedroomType: bedroomType, 
          BathroomType: bathroomType, 
          ConditionTypes:conditionType, 
          StyleTypes:styleType,
          MinPrice:minPrice,
          MaxPrice:maxPrice
         },
      };
  
      API(axiosConfig)
        .then(response => {
          if (response?.err) {
            return;
          }
           dispatch(setResultArr({resultArr: response.response.data.value }));
           navigate("/marketplace")

        })
        .catch(error => {
          console.log('error :>> ', error);
        });
    };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue ===1){
       dispatch(setIsListingFree({ isListingFree: true } ));
    }else{
      dispatch(setIsListingFree({ isListingFree: false } ));
    }
  };

  const handleInputChange = (value, e) => {
    setInputValue(e.target.value);
    if(value ===1){
       dispatch(setIsListingFree({ isListingFree: true } ));
    }else{
      dispatch(setIsListingFree({ isListingFree: false } ));
    }
  };
  const handleSearch=(e)=>{
    e.preventDefault();
    getFilteredData()
  }

  return (
    <div className={`${pathname==="/marketplace"? styles.searchContainerMarketplace : styles.searchContainer}`}>
      <Box sx={{ width: '100%', height:"149px", background:"#fff", borderRadius: "10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} 
        aria-label="basic tabs example"
        TabIndicatorProps={{
            style: {
              backgroundColor: "#64B930"
            }
          }}
        >
          <Tab label="Buy" {...a11yProps(0)}/>
          <Tab label="Free" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
       <form>
        <img src={searchIcon} alt="search" className={styles.searchInputIcon}/>
        <div className={styles.btnWrapper}>
                <FilterModal />
                <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
        </div>
      
        <input 
        className={styles.searchInput} 
        type="search" 
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <form>
        <img src={searchIcon} alt="search" className={styles.searchInputIcon}/>
        <div className={styles.btnWrapper}>
            <FilterModal />
        <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
        </div>
      
        <input 
        className={styles.searchInput} 
        type="search" 
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>
      </CustomTabPanel>

    </Box>
    </div>
  )
}

export default SearchComponent