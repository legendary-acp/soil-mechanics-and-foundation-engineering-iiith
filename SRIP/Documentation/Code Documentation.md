**Experiment Code Documentation**

**Introduction**

This document captures the experiment implementation details.

**Code Details**

**File Name: element.js**

**File Description:**

**Class: soil**

**Class Description:**

It contains all the operation that are executed on soil object like compression, expansion etc. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| strk () | It is used for making soil more realistic |
| compress () | It is used to reduce size of soil when weight falls on it |
| expand () | It is used to expand size of soil when weight is lifted from it |
| show () | It is used to show the soil on canvas |

**Class: weight**

**Class Description:**

It contains all the operation that are executed weight it like compression, expansion etc. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| fall () | It is used for making soil more realistic |
| lift () | It is used to reduce size of soil when weight falls on it |
| show () | It is used to show the weights on canvas |

**Class: weight**

**Class Description:**

It contains all the operation that are executed weight it like compression, expansion etc. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| s1 () | It is used to set parameters of 1st water patch |
| flow1 () | Used to move 1st water patch |
| s2 () | It is used to set parameters of 2nd water patch |
| flow2 () | Used to move 2nd water patch |
| s3 () | It is used to set parameters of 3rd water patch |
| flow3 () | Used to move 3rd water patch |
| show () | It is used to show the water patch on canvas |

**Other details:**

**Formulas used in the Experiment**

1. Final training dataset made would be of this type dataArray = [[x1 y1 0],

[x1 y1 0],

[x2 y2 1],

[x2 y2 1],

[x2 y2 1]

2. Initially the weights vector is assigned [0, 0].

3. There are two inputs values (x1 and y1) and 2 weight values (w1 and w2). The

activation equation used is activation = ( w1 \* x1 + w2 \* y1 ) + bias

4. If activation greater than or equal to 0, then function returns 1, else returns 0

5. There are 2 loops running,

○ Loop over each row in the training data for each iteration

○ Loop over each weight and update it for a row for each iteration

6. Then the error(error = 0/(or)1 - prediction) is calculated. Until the errors becomes 0, weights are modified using the following formula

Weights [j] = weights [j] + ( learning Parameter \* error \* dataArray [c][j] )

7. Now the final weights are displayed under &#39;Value of Weights&#39;. The final

perceptron line is drawn using the following 2 points:

x1 = ( - bias / weights [0] ) x2 = 0

y1 = 0 y2 = ( - bias / weights [1] )

and the perceptron equation is:

y = ( - ( b / w2 ) / ( b / w0 ) ) \* x + ( - b / w1 )