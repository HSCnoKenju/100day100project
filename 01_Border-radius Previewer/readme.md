there 2 major problem in this task 
- change the value of one element's style attribute
- copy to clipboard of that element

1. We retrieved 4 different values (without check) and concanated them to create the value of the attribute
2. There are 2 method to persue the same result navigator.clipboard(asyncronus , newer) and 
    document.execcommand retrocompatibility. So we need to check if the browser supports the navigator.clipboard
    then if not , goes to the document.execcomand implementation.
    Command copy takes the value of the selected element, we are so creating a dummy textarea to fullfill the purpose of storing the attribute value temporally.



thoughts:
- document.getElementById is too restrictive , better transition to querySelector 
and querySelectorAll https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll#JavaScript 
put the :scope pseudoclass to match the espected scope

- understand 8 value border radius https://codepen.io/thebabydino/pen/zbqPVd  