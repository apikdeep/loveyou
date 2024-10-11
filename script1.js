body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.container {
    text-align: center;
}

.pattern-lock {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-template-rows: repeat(3, 50px);
    gap: 10px;
    margin: 20px auto;
}

.cell {
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.cell.active {
    background-color: #007bff;
}

body {
    background-color: #ffebee; /* Light pink background */
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #fff; /* White background for the container */
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
}

h2 {
    color: #d81b60; /* Deep pink */
    margin-bottom: 20px;
}

.pattern-lock {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
    gap: 10px;
    margin: 0 auto;
}

.pattern-lock div {
    width: 60px;
    height: 60px;
    background-color: #ffccbc; /* Light peach */
    border-radius: 50%;
    transition: background-color 0.3s;
}

.pattern-lock div:hover {
    background-color: #ffab40; /* Warm orange on hover */
}

#submitPattern {
    background-color: #f06292; /* Soft pink */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#submitPattern:hover {
    background-color: #c2185b; /* Darker pink on hover */
}

#message {
    margin-top: 20px;
    font-size: 1.2em;
    color: #4a148c; /* Deep purple */
}


