'use client'
import './Advantages.scss'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Advantages(){
 
    

    return(
      
        <>
            <div className='home-block advantages'>
                <h2>Почему именно <span>Наше бюро?</span></h2>
                <div className='advantages-container'>
                    <div className='advantages-text'>
                        <div className='advantages-card'>
                            <span>01</span>
                            <div className='advantages-card-text'>
                                <p>Вне времени</p>
                                <span>Наша архитектура и интерьеры сохраняют свою актуальность и ценность в любой эпохе</span>
                            </div>
                        </div>
                        <div className='advantages-card'>
                            <span>02</span>
                            <div className='advantages-card-text'>
                                <p>Атмосферность</p>
                                <span>Вдохновляемся новыми идеями и применяем накопленный опыт</span>
                            </div>
                        </div>
                        <div className='advantages-card'>
                            <span>03</span>
                            <div className='advantages-card-text'>
                                <p>Неповторимость</p>
                                <span>Подходим нешаблонно к каждому новому проекту</span>
                            </div>
                        </div>
                        <div className='advantages-card'>
                            <span>04</span>
                            <div className='advantages-card-text'>
                                <p>Функциональность</p>
                                <span>Продумываем интерьер в деталях, опираясь на ваши пожелания</span>
                            </div>
                        </div>
                    </div>
                    <Image src={'/Home/преимущество.webp'} alt="Преимущества нашего арихетурно-дизайнерского бюро" width={500} height={800}/>
                </div>
            </div>
        </>
    )
}