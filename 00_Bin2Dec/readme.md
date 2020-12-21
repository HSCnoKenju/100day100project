There are 3 point of complessity in this project:
- validate the input (only 0 and 1)
- max length of the input
- conversion algoritm


- the validation i used Regular Expression to match string build by only 1 or more chars made by 0 or 1 
//     var r = /[01]+/
there are so 2 cases : 
    - match equals null , so there is only non 0 or 1 chars 
    - mixed valued , that i solved by checking if the matched string is the full input string

- max length of the input by maxlength value of input field

- conversion , recursive                    esponential 76543210
                                            position    01234567
                                            sample      10101111

  closing case , last digit (length==1)
  otherwise , multiply the first index value by the 2^esponential(String length-1) and sum recursivly                                         

After reading solutions
there is one very good function called parseInt(input, 2); that makes the algoritm. Nice