from app.models import db, Task

def seed_tasks():
    task1_1 = Task(
        userId=1 ,
        title="Week 1 - First Day Welcome", 
        task_detail= '''Live Lectures: 
        For this portion of the curriculum, lectures will be given live by the instructors and will be recorded and distributed. Take advantage of this to ask the lecturer questions especially during moments when you need clarification on what was just said. Don\t be afraid to ask for something to be repeated! 
        Remember to follow the asking good questions'''
    )
    task1_2 = Task(
        userId=1,
        title='Expressions Learning Objectives',
        task_detail='''
        <ol><li>Given a working REPL interface, write and execute a statement that will print “hello world” using console.log</li><li>Identify that strings are a list of characters defined by using double or
        single quotes</li><li>Given an arithmetic expression using +, -, *, /, %, compute its value</li><li>Given an expression, predict if its value is NaN</li><li>Construct the truth tables for &amp;&amp;, ||, !</li><li>Given an expression consisting of &gt;, &gt;=, ===, &lt;, &lt;=, compute its value</li><li>Apply De Morgan’s law to a boolean expression</li><li>Given an expression that utilizes operator precedence, compute its value</li><li>Given an expression, use the grouping operator to change it’s evaluation</li><li>Given expressions using == and ===, compute their values</li><li>Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict
        the value of labeled lines</li><li><p>Create and assign a variable using <code class="sc-cMljjf hbDMZX">let</code> to a string, integer, and a
        boolean. Read its value and print to the console.</p></li></ol>'''
    )
    task1_3 = Task(
        userId=1,
        title='Favorite Food',
        task_detail= '''<p>Let's write a program! Use <code class="sc-cMljjf hbDMZX">console.log</code> to print out your favorite food. Closely follow the syntax of the given <code class="sc-cMljjf hbDMZX">console.log</code> example.</p>'''
    )
    task1_4 = Task(
        userId=1,
        title='Numbers Exercise',
        task_detail='''<h1 class="sc-cPuPxo hsjqdO">Numbers Exercise</h1><p>Write 5 examples of expressions using each of the operations: <code class="sc-cMljjf hbDMZX">+</code>, <code class="sc-cMljjf hbDMZX">-</code>, <code class="sc-cMljjf hbDMZX">*</code>, <code class="sc-cMljjf hbDMZX">/</code>, and <code class="sc-cMljjf hbDMZX">%</code>. Print out the result of your expressions using <code class="sc-cMljjf hbDMZX">console.log</code>. Be sure to test your work by running your code!</p>'''
    )
    task1_5 = Task(
        userId=1,
        title='Discussion Task',
        task_detail=
        '''<h1>Discussion Task</h1><p>This is the time to discuss the practice exercises as a class. If you were not able to complete the
        exercise, be sure to come up with questions for discussion. Be sure to follow the <a href="https://open.appacademy.io/learn/student-handbook/code-of-conduct/asking-questions" target="_blank">guidelines</a>
        for asking questions!</p><p>If you are stuck, follow these steps:</p><ol><li>Write down everything you do understand about the topic</li><li>Write down everything you do not understand about the topic</li><li>Based on 1 and 2, come up with a <em>specific</em> question that clarifies the parts you do not understand</li><li>Trim down your question to be as <em>clear and concise</em> as possible</li><li>Ask the question</li></ol>
            '''
    )
    task2_1 = Task(
        userId=2 ,
        title='Week 2 - Learning Boost', 
        task_detail= ''' Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task2_2 = Task(
        userId=2,
        title='Two-Dimensional Arrays (2D Arrays)',
        task_detail=
        '''<h1>Two-Dimensional Arrays (2D Arrays)</h1><p>It's time to broaden our understanding of arrays! We've already explored the
    fundamentals of arrays. Mainly, we can store any type of data we please as
    elements of an array and even mix types together. However, what happens if we
    store an array as an element of an array?</p><p>When you finish this article, you should be able to:</p><ul><li>index into the inner elements of a 2D array</li><li>use nested loops to iterate through a 2D array</li></ul><h2>Multidimensional Arrays</h2><p>When we store arrays as elements of other arrays, we refer to those structures
    as multidimensional arrays. If the "depth" of the nested arrays is exactly 2 (an
    outer array containing inner arrays), then we'll refer to it as a
    two-dimensional array:</p><pre style="color: rgb(248, 248, 242); background: rgb(45, 45, 45); font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; overflow: auto; font-size: 16px;"><code style="color: rgb(248, 248, 242); background: none; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; font-size: 16px;"><span class="token" style="color: rgb(102, 217, 239);">let</span> twoDimensional <span class="token" style="color: rgb(248, 248, 242);">=</span> <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"a"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"b"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"c"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"d"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"e"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"f"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"g"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"h"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">;</span>

    <span class="token console" style="color: rgb(166, 226, 46);">console</span><span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token method property-access" style="color: rgb(166, 226, 46);">log</span><span class="token" style="color: rgb(248, 248, 242);">(</span>twoDimensional<span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">1</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">)</span><span class="token" style="color: rgb(248, 248, 242);">;</span> <span class="token" style="color: rgb(119, 128, 144);">// [ 'd', 'e' ]</span>
    <span class="token console" style="color: rgb(166, 226, 46);">console</span><span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token method property-access" style="color: rgb(166, 226, 46);">log</span><span class="token" style="color: rgb(248, 248, 242);">(</span>twoDimensional<span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">1</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">0</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">)</span><span class="token" style="color: rgb(248, 248, 242);">;</span> <span class="token" style="color: rgb(119, 128, 144);">// 'd'</span>

    <span class="token" style="color: rgb(102, 217, 239);">let</span> subArr <span class="token" style="color: rgb(248, 248, 242);">=</span> twoDimensional<span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">1</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">;</span>
    <span class="token console" style="color: rgb(166, 226, 46);">console</span><span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token method property-access" style="color: rgb(166, 226, 46);">log</span><span class="token" style="color: rgb(248, 248, 242);">(</span>subArr<span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">0</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">)</span><span class="token" style="color: rgb(248, 248, 242);">;</span> <span class="token" style="color: rgb(119, 128, 144);">// 'd'</span></code></pre><p>Note that indexing the outer <code class="sc-cMljjf hbDMZX">twoDimensional</code> array will return an element like
    usual, it's just that element happens to be another array. To gain access to the
    innermost elements, we simply need to apply another set of indexing brackets!</p><p>If we style our 2D arrays nicely so that each subarray is on a new line, we can
    interpret the double indices as <code class="sc-cMljjf hbDMZX">[row][column]</code>:</p><pre style="color: rgb(248, 248, 242); background: rgb(45, 45, 45); font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; overflow: auto; font-size: 16px;"><code style="color: rgb(248, 248, 242); background: none; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; font-size: 16px;"><span class="token" style="color: rgb(102, 217, 239);">let</span> twoDimensional <span class="token" style="color: rgb(248, 248, 242);">=</span> <span class="token" style="color: rgb(248, 248, 242);">[</span>
        <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"a"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"b"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"c"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">,</span>
        <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"d"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"e"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">,</span>
        <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"f"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"g"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"h"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">;</span>

    <span class="token" style="color: rgb(119, 128, 144);">// get the element in the 0th row, 2nd col:</span>
    <span class="token console" style="color: rgb(166, 226, 46);">console</span><span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token method property-access" style="color: rgb(166, 226, 46);">log</span><span class="token" style="color: rgb(248, 248, 242);">(</span>twoDimensional<span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">0</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(174, 129, 255);">2</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">)</span><span class="token" style="color: rgb(248, 248, 242);">;</span> <span class="token" style="color: rgb(119, 128, 144);">// 'c'</span></code></pre><h2>Iterating through 2D Arrays</h2><p>Since a 2D array is just an array of arrays. We'll need to use a loop within a
    loop to iterate through a 2D array:</p><pre style="color: rgb(248, 248, 242); background: rgb(45, 45, 45); font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; overflow: auto; font-size: 16px;"><code style="color: rgb(248, 248, 242); background: none; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; font-size: 16px;"><span class="token" style="color: rgb(102, 217, 239);">let</span> array <span class="token" style="color: rgb(248, 248, 242);">=</span> <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"a"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"b"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"c"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"d"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"e"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(248, 248, 242);">[</span><span class="token" style="color: rgb(230, 219, 116);">"f"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"g"</span><span class="token" style="color: rgb(248, 248, 242);">,</span> <span class="token" style="color: rgb(230, 219, 116);">"h"</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">;</span>

    <span class="token" style="color: rgb(102, 217, 239);">for</span> <span class="token" style="color: rgb(248, 248, 242);">(</span><span class="token" style="color: rgb(102, 217, 239);">let</span> i <span class="token" style="color: rgb(248, 248, 242);">=</span> <span class="token" style="color: rgb(174, 129, 255);">0</span><span class="token" style="color: rgb(248, 248, 242);">;</span> i <span class="token" style="color: rgb(248, 248, 242);">&lt;</span> array<span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token property-access">length</span><span class="token" style="color: rgb(248, 248, 242);">;</span> i<span class="token" style="color: rgb(248, 248, 242);">++</span><span class="token" style="color: rgb(248, 248, 242);">)</span> <span class="token" style="color: rgb(248, 248, 242);">{</span>
    <span class="token" style="color: rgb(102, 217, 239);">let</span> subArray <span class="token" style="color: rgb(248, 248, 242);">=</span> array<span class="token" style="color: rgb(248, 248, 242);">[</span>i<span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">;</span>
    <span class="token console" style="color: rgb(166, 226, 46);">console</span><span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token method property-access" style="color: rgb(166, 226, 46);">log</span><span class="token" style="color: rgb(248, 248, 242);">(</span>subArray<span class="token" style="color: rgb(248, 248, 242);">)</span><span class="token" style="color: rgb(248, 248, 242);">;</span>

    <span class="token" style="color: rgb(102, 217, 239);">for</span> <span class="token" style="color: rgb(248, 248, 242);">(</span><span class="token" style="color: rgb(102, 217, 239);">let</span> j <span class="token" style="color: rgb(248, 248, 242);">=</span> <span class="token" style="color: rgb(174, 129, 255);">0</span><span class="token" style="color: rgb(248, 248, 242);">;</span> j <span class="token" style="color: rgb(248, 248, 242);">&lt;</span> subArray<span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token property-access">length</span><span class="token" style="color: rgb(248, 248, 242);">;</span> j<span class="token" style="color: rgb(248, 248, 242);">++</span><span class="token" style="color: rgb(248, 248, 242);">)</span> <span class="token" style="color: rgb(248, 248, 242);">{</span>
        <span class="token console" style="color: rgb(166, 226, 46);">console</span><span class="token" style="color: rgb(248, 248, 242);">.</span><span class="token method property-access" style="color: rgb(166, 226, 46);">log</span><span class="token" style="color: rgb(248, 248, 242);">(</span>subArray<span class="token" style="color: rgb(248, 248, 242);">[</span>j<span class="token" style="color: rgb(248, 248, 242);">]</span><span class="token" style="color: rgb(248, 248, 242);">)</span><span class="token" style="color: rgb(248, 248, 242);">;</span>
    <span class="token" style="color: rgb(248, 248, 242);">}</span>
    <span class="token" style="color: rgb(248, 248, 242);">}</span></code></pre><p>In the nested loops above, the <code class="sc-cMljjf hbDMZX">i</code> index refers to the current "row" and the <code class="sc-cMljjf hbDMZX">j</code>
    index refers to the current "column". It's worth noting that since the inner
    subArrays have different length, we'll want to specifically reference the length
    of that subarray in our inner loop condition <code class="sc-cMljjf hbDMZX">j &lt; subArray.length</code>. The code
    above will print:</p><pre style="color: rgb(248, 248, 242); background: rgb(45, 45, 45); font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; overflow: auto; font-size: 16px;"><code style="color: rgb(248, 248, 242); background: none; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; font-size: 16px;">[ 'a', 'b', 'c' ]
    a
    b
    c
    [ 'd', 'e' ]
    d
    e
    [ 'f', 'g', 'h' ]
    f
    g
    h</code></pre><h2>When is a 2D array practical?</h2><p>As a preview of things to come let's briefly mention when you'll find a 2D array
    useful in your future projects. Imagine how'd you represent a "grid":</p><ul><li>tic-tac-toe (3x3 grid)</li><li>chess (8x8 grid)</li><li>sudoku (9x9 grid)</li><li>excel (a sheet is an arbitrarily sized 2D array)</li></ul><h2>What you've learned</h2><ul><li>an array can contain arrays as elements, we call this a 2D array</li><li>to iterate through a 2D array, used nested loops</li></ul>'''
    )
    task3 = Task(
        userId=3 ,
        title='Week 3 - Finalize Setup and Installation', 
        task_detail='''
        Finalize Setup and Installation
        Click this link to access an external resource. Return and mark as complete when you are finished.
        '''
    )
    task4 = Task(
        userId=1 ,
        title='Week 4 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task5 = Task(
        userId=1 ,
        title='Week 5 - Recursion and IIFEs', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task6 = Task(
        userId=3 ,
        title='Week 6 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task7 = Task(
        userId=2 ,
        title='Week 7 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task8 = Task(
        userId=1 ,
        title='Week 8 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )


    db.session.add(task1_1)
    db.session.add(task1_2)
    db.session.add(task1_3)
    db.session.add(task1_4)
    db.session.add(task1_5)
    db.session.add(task2_1)
    db.session.add(task2_2)
    db.session.add(task3)
    db.session.add(task4)
    db.session.add(task5)
    db.session.add(task6)
    db.session.add(task7)
    db.session.add(task8)

    db.session.commit()

def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()