/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/




//Created array of quote objects

const quotes = [
  {
    quote: "Success is going from failure to failure without losing your enthusiasm.",
    source: 'Winson Churchill',
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    year: '1950',
    tag : 'inspirational'
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: 'Lao Tzu',
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    year: '1963',
    tag : 'inspirational'
  },
  {
    quote: "Dream big and dare to fail.",
    source: 'Norman Vaughan',
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    year: '1990',
    tag: 'informative'
  },
  {
    quote: "What you do speacks so loudly that i cannot hear what you say.",
    source: 'Ralph Woldo Emerson',
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    year: '2010',
    tag: 'informative'
  },
  {
    quote: "You must be the change you want to see in the world.",
    source: 'Gandhi',
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    year: '2014',
    tag : 'inspirational'
  },
  {
    
    source: 'Dr. Robert Schuller',
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    year: '1983',
    tag: 'informative'
  },
  {
    
    source: "John Muir",
    citation: '“65 Most Inspirational Quotes of All-Time.”',
    tag : 'inspirational'

  },
  {

    source: "George Addair",
    year: '2017',
    

  }
];

// creating an array of colors and storing it in a constant
const color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

//Random color function
function getrandomcolor(){
 const colorIndex = Math.floor(Math.random() * color.length);
  
  return color[colorIndex];
}
//Random quote function
function getRandomQuote() {
  //stores random qoutes in quoteIndex
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  //creating a variable and storing the result of the random quote generating in it
  let quotetoskip = quotes[quoteIndex].quote;

//creating an if statement
  if(typeof quotetoskip == 'undefined'){

//returning the getrandom funtion within itself
    return getRandomQuote();
  }
  //returning Random quotes
  return quotes[quoteIndex];

  }
  
//evaluates quote array as an aguement and stores results of functions in variable
const result = getRandomQuote();

// creating a function printQuote
function printQuote() {

  //creating a variable stringofQuote and making it an empty string.
  let StringofQuote = "";

  //creating a constant actualQuote to call getRandomQuote(quotes).
  let actualQuote = getRandomQuote();

  //creating the HTML string.
  StringofQuote = "<p class = 'quote'>" + actualQuote.quote + "</p>";
  StringofQuote += "<p class = 'source'>" + actualQuote.source;
  
  


  //creating the if condition for the citation property
  if (typeof actualQuote.citation != 'undefined') {
    StringofQuote += "<span class = 'citation'>" + actualQuote.citation + "<span/>";
  }
  //if condition for year property
  if (typeof actualQuote.year != 'undefined') {
    StringofQuote += "<span class = 'year'>" + actualQuote.year + "<span/><p/>";
  }
  // if condition for tag property
  if (typeof actualQuote.tag != 'undefined') {
    StringofQuote += "<span class = 'tag'>" + actualQuote.tag + "<span/><p/>";
  }
  //linking to HTML
  document.getElementById('quote-box').innerHTML = StringofQuote;

  //calling getrandomcolor function and storing it in the constant resultcolor. 
  const resultcolor = getrandomcolor();

  //linking resultcolor to style attribute of css.
  document.body.style.backgroundColor = resultcolor;

  //linking resultcolor to background attribute of loadQuote.
  document.getElementById("loadQuote").style.backgroundColor = resultcolor;
 
}
  //setting time interval.
 setInterval(printQuote, 30000);
 
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);
