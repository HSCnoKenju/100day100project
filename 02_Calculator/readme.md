1. layout 
    by first, the most found the most easy way to build a simple layout using grid-like system with 
         display              : grid;
        grid-template-columns: repeat(4, 1fr);
        documentation https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout 

2. event based handle
    attach to each button (or class of buttons) different behavior based of the action made (Esample "click")

3. algoritm insight
    created 4 list to store values of 
    - valid inputs
    - display state
    - the result of last operation
    - the last operation

    for every button pressed i have to add a new entry to the input list, take the old string of the display and concat the input as the new display state.
    if the input is an mathematic operation, i'm gonna add the input to the operation list and calculate the answer of last operation.

    EDGE CASES : - =(equals) sign should not print itself on the result string at the display.
                 - +/-(positive/negative) after a operation sign (except =) delete the sign and all the side effect (entry on   result list and operation list)
                 - +/- don't add to operation list
                 - putting a operation when another operation is the last input , will OVERRIDE it.
    