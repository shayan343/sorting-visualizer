/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import getBubbleSortAnimations from "../SortingAlgorithms/bubbleSort";
import { getMergeSortAnimations } from "../SortingAlgorithms/mergeSort";
import getInsertionSortAnimations from "../SortingAlgorithms/insertionSort";
import randomIntFromInterval from "./utility";
import SortInfo from "./SortInfo/SortInfo";
import AlgoDetails from "./SortInfo/AlgoDetails";


const ANIMATION_SPEED_MS = 15;

const NUMBER_OF_ARRAY_BARS = 25;

const PRIMARY_COLOR = "#fff";

const SECONDARY_COLOR = "#f69";



const SortingVisualizer = () => {
  
  const [sortInfo, setSortInfo] = useState([{}]);
  const [algo, setAlgo] = useState();
  const [array, setArray] = useState([]);
  const [title, setTitle] = useState("Select Algorithm");
  //const [disable, setDisable] = useState(false);



  useEffect(() => {
    resetArray();
  }, [])
  
  

  function resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(50, 600));
    }

    setArray(array);
  }
   
  
  function mergeSort() {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight/10}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  function bubbleSort() {
    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight1 / 10}vh`;
          barTwoStyle.height = `${newHeight2 / 10}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    
  }

  function insertionSort() {
    const animations = getInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    var last = -1, globalLast = -1;
    for (let i = 0; i < animations.length; i++) {
      if ((animations[i]).length === 2) {
        const [barIdx, flag] = animations[i];
        if (flag === -10) {
          setTimeout(() => {
              
            if (globalLast !== -1) {
              setTimeout(() => {
                arrayBars[globalLast].style.backgroundColor = PRIMARY_COLOR;
              }, i * ANIMATION_SPEED_MS);
              // if(last !== -1) {
              //   setTimeout(() => {
              //   arrayBars[last].style.backgroundColor = PRIMARY_COLOR;
              //   }, i*ANIMATION_SPEED_MS);
              //   last = -1;
              // }
              arrayBars[barIdx].style.backgroundColor = "grey";
            }
          }, i * ANIMATION_SPEED_MS);
          globalLast = barIdx;
        }
        else {
          console.log(last);
          if (last !== -1) {
            console.log("A" + last);
            setTimeout(() => {
              arrayBars[last].style.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
          }
          setTimeout(() => {
            arrayBars[barIdx].style.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          last = barIdx;
          // console.log(last);
        }
      }
      else if ((animations[i]).length === 3) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // console.log((animations[i]).length());
        setTimeout(() => {
          const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight1 / 10}vh`;
          barTwoStyle.height = `${newHeight2 / 10}vh`;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  function algoSwitch(algo) {
    switch(algo) {
      case 1: bubbleSort(); break;
      case 2: mergeSort(); break;
      case 3: insertionSort(); break;
      default: break;
    }
  }
  function infoSwitch(algo) {
    switch (algo) {
      case 1: setAlgo(1);
        setTitle("Bubble Sort");
        setSortInfo([AlgoDetails(1)]); break;
      
      case 2: setAlgo(2);
        setTitle("Merge Sort");
        setSortInfo([AlgoDetails(2)]); break;
      
      case 3: setAlgo(3);
        setTitle("Insertion Sort");
        setSortInfo([AlgoDetails(3)]); break;
      default: break;
    }
  }
    

    return (
      <div>
        {/* <div className="header">
          <button className="buttonStyle" onClick={() => resetArray()}>
            Randomize
          </button>
          <button className="buttonStyle" onClick={() => infoSwitch(1)}>
            Bubble Sort
          </button>

          <button className="buttonStyle" onClick={() => infoSwitch(2)}>
            Merge Sort
          </button>
          <button className="buttonStyle" onClick={() => infoSwitch(3)}>
            Insertion Sort
          </button>
          <button className="buttonStyle" disabled={disable} onClick={() => algoSwitch(algo)}>
            Visualize
          </button>
        </div> */}
        

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features" onClick={()=>resetArray()}>Randomize</Nav.Link>
      <Nav.Link href="#pricing" onClick={()=>algoSwitch(algo)}>Visualize</Nav.Link>
      <NavDropdown title={title} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" onClick={()=>infoSwitch(1)}>Bubble Sort</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" onClick={()=>infoSwitch(2)}>Merge Sort</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" onClick={()=>infoSwitch(3)}>Insertion Sort</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 
          
      

        <div className="container">{array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
                height: `${value / 10}vh`,
                marginRight: `0.3vw`
            }}
          ></div>
        ))}</div>
        <SortInfo title={sortInfo[0].title}
          description={sortInfo[0].description}
          worstCase={sortInfo[0].worstCase}
          avgCase={sortInfo[0].avgCase}
          bestCase={sortInfo[0].bestCase}
          space={sortInfo[0].space}
        />
      </div>
    );
  }


export default SortingVisualizer;