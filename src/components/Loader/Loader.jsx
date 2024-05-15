import React from 'react'
import { words } from './Data'

import style from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={style.loader_wrapper}>


        <div className={style.loader_progressWrapper}>
            <div className={style.loader_progress}></div>
            <span className={style.loader_progressNumber}>0</span>
        </div>


        <div className={style.loader}>
            <div className={style.loader_words}>
                <div className={style.loader_overlay}></div>
                <div className={style.loader_wordsGroup}>
                    {words.map((word, index) => {
                        return (
                            <span key={index} className={style.loader_word}>
                                {word}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>


    </div>
  );
};

export default Loader;