import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

import {filterActions} from "../../redux";

import css from './Search.module.css';

const Search = () => {
    const dispatch = useDispatch();

    const [filled, setFilled] = useState('');
    const inputRef = useRef(null);

    const onClickClear = () => {
        dispatch(filterActions.setSearchValue(''));
        setFilled('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setFilled(event.target.value);
        dispatch(filterActions.setSearchValue(event.target.value));
    };

    return (
        <label style={{display: "flex"}}>
            <input className={css.searchInput}
                   type="text"
                   ref={inputRef}
                   value={filled} onChange={onChangeInput}
                   placeholder={'Search...'}/>
            {
                filled && (<button className={css.searchBtn} onClick={onClickClear}>reset</button>)
            }
        </label>
    );
};

export {Search};