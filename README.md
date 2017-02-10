# JacksonMacLowDiastic
Following along with coding rainbow videos. 

https://sas-wat.github.io/JacksonMacLowDiastic/04diasticmachine/index.html

This uses a seed word to select words from a source text to make poetry, using an algorithm. 
The algorithm uses the seed word to find words which fit a certain pattern. 
The order of characters in the seed word are used to find words which have that character in that same location.

Example: 
  seed word: saswat
  sample output: <b>S</b>eptember W<b>a</b>r wa<b>s</b> kno<b>w</b>n prim<b>a</b>rily muske<b>t</b>s, (using words from a random
  page on wikipedia, here it is the civil war article.)
  
So First word that with first letter S, Second word with second letter A, Third word with  third letter S, etc.

<h1>Objectives</h1>

1. My goals are to fix this so it doesn't just use a default word bank but finds a random wikipedia page.
2. I think that approach will also make it easier to remove references, without having to use regexps (e.g., [12]) so there are no random numbers in the final output.
3. Maybe then I can use this code to send random tweets.
