import React from 'react'
import { useEffect } from 'react'

export default function Cprog() {
 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="container-fluid py-3" style={{minHeight:'100vh'}}>
       <h1 className="text-center" style={{fontSize:'40px'}}>Learn C Programming </h1><hr />
       <div className="container mt-4">
        <h2>Introduction :</h2>
        <ul className="ps-3">
           <li>C language is a general purpose and structured programming language developed by 'Dennis Ritchie' at AT&T's Bell Laboratories in the 1972 in USA.</li>
           <li>C is powerfull flexible language that provides fast program execution. Its power and fast program execution come from its ability to access low level commands, similar to assembly language, but with high level syntax.</li>
           <li>C is a middle level language because it combines the best elements of high-level languages with the control and flexibility of assembly language.</li>
           <li>C language is also called as 'Procedure Oriented Programming Language'.</li>
           <li>C language allows the programmer to write low level programs as well as high level programs so it is called as Middle Level Language.</li>
           <li>C is a compatible language i.e. C is not restricted for a certain generation of computers i.e. it can be used on all machines right from 8086 to the recent 686 machine. It permits machine independent programs to be written. Also, we can interact with the hardware using C.</li>
        </ul>
       </div>
       <div className="container my-4">
        <h2 className="pb-3">Features of C :</h2>
        <ul type="1" className='ps-0'>
            <p><span className="fw-bold">1. Middle Level Language : </span>C is a middle level language as it combines elements of high-level language with the functional of assembly language. C allows direct manipulation of bits, bytes, words, and pointers.</p>
            <p><span className="fw-bold">2. Block Structured Language : </span>C is referred as a structured language because it is similar in many ways to other structured languages like ALGOL, Pascal and the likes. C allows separation of code and data. This is a distinguishing feature of any structured language.</p>
            <p><span className="fw-bold">3. Code Portability : </span>The code written in C is machine independent which means, there is no change in 'C' instruction, when you change the Operating System  or Hardware. There is hardly any change required to compile when you move the program from one environment to another.</p>
            <p><span className="fw-bold">4. Recursion : </span>A function may call itself again and again this feature is called as recursion, is supported by C.</p>
            <p><span className="fw-bold">5. Efficiency : </span>C provides fast program execution.</p>
            <p><span className="fw-bold">6. High Level Language Features : </span>This feature allows the programmer to concentrate on the logic flow of the code.</p>
            <p><span className="fw-bold">7. Low Level Features : </span>C has a close relationship with assembly languages. So it is easy to make assembly program in C.</p>
            <p><span className="fw-bold">8. Powerful : </span>C is very powerful language since low level commands have been access like assembly language.</p>
            <p><span className="fw-bold">9. Flexibility : </span>In C language programmer has many ways to accomplish the same task.</p>
            <p><span className="fw-bold">10. Small Size : </span>C language provides no input output facilities. This helps to keep program small.</p>
        </ul>
       </div>
       <div className="container my-4">
          <h2>STRUCTURE OF 'C' PROGRAM :</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                  <div className="col">
                     <p>The basic structure of C program is show below:</p>
                         <div className="border border-secondary ps-2 mx-auto" style={{width:'300px',display:'flex',flexDirection:'column'}}>
                           <span>Libray file access</span> 
                           <span>Definition section</span>
                           <span>Global declaration</span>
                         </div>
                         <div className="border border-secondary border-top-0 ps-2 mx-auto" style={{width:'300px',display:'flex',flexDirection:'column'}}>
                           <span>Functions</span> 
                           <span>main()</span>
                           <span>{'{'}</span>
                           <span className='ps-4'>declarations</span> 
                           <span className='ps-4'>statements</span>
                           <span>{'}'}</span>
                         </div>
                         <div className="border border-secondary border-top-0 ps-2 mx-auto" style={{width:'300px',display:'flex',flexDirection:'column'}}>
                           <span>User-defined functions</span> 
                           <span>function1()</span>
                           <span>{'{'}</span>
                           <span className='ps-4'>.......</span> 
                           <span>{'}'}</span>
                           <span>function2()</span>
                           <span>{'{'}</span>
                           <span className='ps-4'>........</span> 
                           <span className='ps-4'>........</span> 
                           <span>{'}'}</span>
                         </div>
                  </div>
                  <div className="col">
                      <div className='mx-auto' style={{display:'flex',flexDirection:'column'}}>
                        <p className="fw-bold fs-5 mb-1">A simple C program: </p>
                        <span>{'/* Hello Program */'}</span>
                             <div className="py-3 ps-3 border border-secondary border-secondary-subtle rounded-2 ps-2 mx-auto my-4" style={{width:'300px',display:'flex',flexDirection:'column'}}>
                                <span>{'#include<stdio.h>'}</span>
                                <span>int main()</span>
                                <span>{'{'}</span>
                                <span className='ps-4'>printf("Hello World");</span>
                                <span className='ps-4'>return 0;</span>
                                <span>{'}'}</span>
                             </div>
                      </div>
                  </div>
              </div>
              <div className="container my-2 my-lg-4">
                <p><span className="fw-bold">{'1. #include<stdio.h> :'}</span> This first line of the program is a preprocessing directive, <b>#include.</b> The #include directive tells the preprocessor to insert the contents of another file into the source code at the point where the #include directive is found. The header file <b>stdio.h</b> contains declarations for standard input and output functions such as <b>printf.</b></p>
                <p><span className="fw-bold">2. int main() : </span>This line indicates that a function named main is being defined. The main function serves a special purpose in C programs. The run-time environment calls the main function to begin program execution. The type specifier int indicates that the return value, the value of evaluating the main function that is returned to its invoker(in this case the run-time environment), is an integer.</p>
                <p><span className="fw-bold">3. {'{ '} &nbsp;: </span> &nbsp;This opening curly brace indicates the beginning of the definition of the main function.</p>
                <p><span className="fw-bold pe-3">4. printf(<span className="fw-normal">"Hello World"</span>);</span>This line calls (executes the code for) a function named <b>printf</b>, which is declared in the included header stdio.h and supplied from a system library. In this call,the printf function is passed (provided with) a single argument, the address of the first character in the string literal "hello world\n". The semicolon (;) terminates the statement.</p>
                <p><span className="fw-bold pe-4">5. return 0;</span>This line terminates the execution of the main function and causes it to return the integer value 0, which is interpreted by the run-time system as an exit code, (indicating successful execution).</p>
                <p><span className="fw-bold">6. {'}'}&nbsp; :</span>&nbsp;&nbsp;This closing curly brace indicates the end of the code for the main function.</p>
              </div>
       </div>
       <div className="container">
        <h2>Keywords in C :</h2>
            <ul className='ps-3'>
                <li>Keywords are the reserved words used in C programming. Each keyword has fixed meaning and that cannot be changed by user.</li>
                <li>Keywords are standard identifiers that have standard predefined meaning in c.</li>
                <li>It is strongly recommended that keywords should be in lower case letters.</li>
                <li>Keywords can be used only for their intended purpose. Keywords can't be used as progammer defined identifier. The keywords can't be used as names for variables.</li>
                <li>There are totally <b>32 keywords</b> used in a C programming.</li>
            </ul>
            <div className="container" style={{maxWidth:'800px'}}>
               <div className="row row-cols-4 row-cols-lg-8 border border-secondary">
                  <div className="col ps-1 border border-secondary">int</div>
                  <div className="col ps-1 border border-secondary">float</div>
                  <div className="col ps-1 border border-secondary">double</div>
                  <div className="col ps-1 border border-secondary">long</div>
                  <div className="col ps-1 border border-secondary">short</div>
                  <div className="col ps-1 border border-secondary">signed</div>
                  <div className="col ps-1 border border-secondary">unsigned</div>
                  <div className="col ps-1 border border-secondary">const</div>
                  <div className="col ps-1 border border-secondary">if</div>
                  <div className="col ps-1 border border-secondary">else</div>
                  <div className="col ps-1 border border-secondary">switch</div>
                  <div className="col ps-1 border border-secondary">break</div>
                  <div className="col ps-1 border border-secondary">default</div>
                  <div className="col ps-1 border border-secondary">do</div>
                  <div className="col ps-1 border border-secondary">while</div>
                  <div className="col ps-1 border border-secondary">for</div>
                  <div className="col ps-1 border border-secondary">register</div>
                  <div className="col ps-1 border border-secondary">extern</div>
                  <div className="col ps-1 border border-secondary">static</div>
                  <div className="col ps-1 border border-secondary">struct</div>
                  <div className="col ps-1 border border-secondary">typedef</div>
                  <div className="col ps-1 border border-secondary">enum</div>
                  <div className="col ps-1 border border-secondary">return</div>
                  <div className="col ps-1 border border-secondary">sizeof</div>
                  <div className="col ps-1 border border-secondary">goto</div>
                  <div className="col ps-1 border border-secondary">union</div>
                  <div className="col ps-1 border border-secondary">auto</div>
                  <div className="col ps-1 border border-secondary">case</div>
                  <div className="col ps-1 border border-secondary">void</div>
                  <div className="col ps-1 border border-secondary">char</div>
                  <div className="col ps-1 border border-secondary">continue</div>
                  <div className="col ps-1 border border-secondary">volatile</div>
               </div>
            </div>
       </div>
       <div className="container my-4">
         <h2>Identifiers :</h2>      
          <ul className='ps-3'>
            <li>An identifier is a user define name to represent program elements such as function names, variables, structures etc.</li>
            <li>Identifier is the name of a variable that is made up from combination of alphabets,digits and underscore.</li>
            <li>Identifiers are created to give unique name to C entities to identify it during the execution of program.</li>
            <li>The rules which should be followed while naming an identifier are:</li>
            <ul type="1" className='ps-3'>
              <li>Identifier name must be a sequence of letter and digits,and must begin with a letter.</li>
              <li>The underscore character('_')is considered as letter.</li>
              <li>Names should not be a keyword (such as int, float, if, break, for etc.).</li>
              <li>No identifier may be keyword.</li>
              <li>No special characters, such as semicolon,period,blank space,slash or comma are premitted.</li>
            </ul>
          </ul>  
          <h6>Examples of valid identifiers :</h6>
          <p className='ps-3' style={{fontFamily:'monospace'}}>sum, sum1, price_of_item, Rate_of_interest, add_odd.</p>
          <h6>Examples of invalid identifiers :</h6>
          <p className='ps-3' style={{fontFamily:'monospace'}}>2rate, 6a, a+b, x%y</p>
       </div>
       <div className="container">
         <h2>Variables :</h2>
          <ul className='ps-3'>
            <li>A variable is a name assigned to the memory location where data is stored. In order words, the variable is the data name that refers to the stored value.</li>
            <li>Variables are a memory location in the computer's memory to store data. To indicate the memory location, each variable should be given a unique name called Identifier.</li>
          </ul>
          <p className='fw-bold'>Rules for naming variable :</p>
          <ul type="1">
            <li>Variable name must begin with a letter or underscore.</li>
          </ul>
       </div>
    </div>
  )
}
