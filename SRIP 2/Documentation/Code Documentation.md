# Experiment Code Documentation

## Introduction

This document captures the experiment implementation details.

## Code Details

### File Name: element.js

**File Description:**

**Class: soil**

**Class Description:**

It contains all the operation that are executed on soil object. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| update_y () | It is used to change postion of soil after initialzation of experiment |
| strk () | It is used for making soil more realistic |
| move_left () | It is used to move soil to left side |
| strk2 () | It is used to show crack during its left movement |
| text_write () | It is used to write text on soil |
| show () | It is used to show the soil on canvas |

**Class: upper_tool**

**Class Description:**

It contains all the functions that are executed for construction of upper part of tool. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| show () | It is used to show the upper part of tool on canvas |

**Class: lower_part**

**Class Description:**

It contains all the functions that are executed for construction and working of lower part of tool. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| move_left () | It is used to move lower part to left side |
| show () | It is used to show the water patch on canvas |

### File Name: main.js

**File Description:**

This file is responsible for creation of canvas and telling object how to move in canvas. Few function and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| setup () | It initializes canvas making process of p5.js |
| draw () | It is used to redraw the objects after any changes are made. This function is called again and again automatically in p5.js |
| init () | It is used to start/reset the animation. It is called from button on HTML page |

### File Name: index.html

**File Description:**

This file is main file which is open in browser for starting of animation. It contains a button which is used to start or reset the animation.  

**Other details:**

**Formulas used in the Experiment**

Most of the formulas used are based on cordinate system. The main formula used is listed below:

1. **For left movement**

obj.x = obj.x - spd //Decrease the x cordinates of each point of object by certain spd(speed)



