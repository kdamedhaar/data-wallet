import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Grid from './Grid'
import './Component.css'


const cardData = [
    {
        name: "1) My First Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 10,
        max: 1000,
        author: "John Wick",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "2) My Second Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 25,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "3) My Third Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 0,
        max: 1000,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "4) Fourth Asset",
        description: "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 100,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "5) My First Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 10,
        max: 1000,
        author: "John Wick",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "6) My Second Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 25,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "7) My Third Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 0,
        max: 1000,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "8) Fourth Asset",
        description: "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 100,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "9) My First Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 10,
        max: 1000,
        author: "John Wick",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "10) My Second Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 25,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "11) My Third Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 0,
        max: 1000,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "12) Fourth Asset",
        description: "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 100,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "13) My First Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 10,
        max: 1000,
        author: "John Wick",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "14) My Second Data Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 25,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "15) My Third Asset",
        description: "This is a sample description of my first data asset. This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 0,
        max: 1000,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    },
    {
        name: "16) Fourth Asset",
        description: "This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset.This is a sample description of my first data asset. ",
        price: 1,
        max: 100,
        author: "John Wayne",
        sample: "https://gist.githubusercontent.com/woozyfr/06b45472cedbe978880ecc3ad9465b85/raw/e0499bb691eaf2e305a9058480b46e22883149b1/gistfile1.txt"
    }
]

export default function ManageForm() {


    return (
        <div>
            <Grid data={cardData} />
        </div>
    )
}
