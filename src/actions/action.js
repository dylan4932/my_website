import Typed from "typed.js";

export const btn_activator = () => {
    // let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    // let searchBtn = document.querySelector('#btn')

    sidebar.classList.toggle('active');
}

export const read_exp = (num) => {
    const section = document.getElementById('experience')
    const container = document.getElementById('exp-container');
    container.classList.toggle('deactive')


    const newCon = document.createElement('div')
    newCon.className = 'experience-container'

    const newBox = document.createElement('div')
    newBox.className = 'new-box'
    const typedCon = document.createElement('div')
    typedCon.id = 'new-content'
    const backBtn = document.createElement('button')
    backBtn.className = 'back-btn'
    const btnNode = document.createTextNode('Back');
    backBtn.appendChild(btnNode)
    backBtn.setAttribute('onclick','window.location.reload()')

    const input = [
        [ "<p>Developed and maintained a health literature application using Java and Python. Collaborated with cross-functional teams to design software solutions and implemented Agile Development Methodologies to the software life-cycle.</p> <p> Created a comprehensive set of automated and manual tests to verify that all application services functionalities. Identified several problems with the user-interaction functionality and resolved them by implementing an Ajax request (an asynchronous request) to prevent blocking the main thread.</p><p>Implemented Django REST to develop a portion of the back-end services that supported a range of user features, along with AWS cloud services and rational database models in Oracle SQL. Implemented robust security techniques such as multi-factor authentication and firewalls to enhance data privacy.</p><p>Effectively manage, maintain and monitor stakeholders’ data, including data processing, and database management using SAS, Excel, SQL and data governance, to ensure the health and integrity of the clinical data for research design.</p><p>Developed a key information extraction tool using Python to support clients in collecting and reviewing relevant medical literature, and performing Meta-analysis on a series of literature, thereby enhancing research efficiency and efficacy.</p><p>Developed Hypothesis testing protocols and statistical research methods with clinical experts for clinical research pre-experiments.</p>"],
        [ "<p>Collaborated with cross-functional teams to devise optimal solutions that align with business requirements and adhere to best practices in software development. Acquired expertise in software development life cycle (SDLC) and agile development methodology.</p><p>Conducted IT solutions research, performed system analysis, created testing plans, and tested new features and APIs using Jest and Selenium. As well as focused on improving performance, quality, and scalability through various enhancements.</p><p>Developed technical documents to accurately represent the design and maintain web applications with a prominent level of code quality.</p><p>Retrieving data from various data sources using data mining techniques, writing SAS programs/SQL queries from multiple data sources, building datasets, validating data, analyzing, designing, building, and enhancing reports.</p><p>Assessed and analyzed different methods of expanding the revenue streams for clients using techniques such as SWOT, PESTLE, and Porter’s 5 Forces, presented them with well-reasoned and informative justification with reports and dashboards.</p><p>Developed quantitative analyses, qualitative analyses, and ad hoc reports to identify key issues and improve complex business processes.</p>"],
        [ "<p>Developed strong understanding of precious metal products to provide informative descriptions of company offerings to prospective customers, ultimately driving business initiatives. </p><p>Coordinated bank marketing activities by organizing and implementing strategic plans with objective of boosting company services.</p><p>Demonstrated exceptional communication skills by directly liaising with customers regarding management of personal banking accounts.</p><p>Maintained confidentiality of bank records and client information to prevent mishandling of data and potential breaches.</p><p>Obtained knowledge of banking procedures and customer classification standards to appropriately meet customer needs.</p>"]
    ]
    if(num === 0){
        const content1 = document.createElement('h1')
        const line1 = document.createTextNode('Software Developer - Beijing Health Promotion Association');
        const content2 = document.createElement('p')
        const line2 = document.createTextNode('Beijing, China   2021/06 - 2023/01')

        content1.appendChild(line1)
        content2.appendChild(line2)
        content2.appendChild(typedCon)
        newBox.appendChild(content1)
        newBox.appendChild(content2)
        newBox.appendChild(backBtn)
        newCon.appendChild(newBox)
        section.appendChild(newCon)
    }else if(num===1){
        const content1 = document.createElement('h2')
        const line1 = document.createTextNode('Web Developer Intern - Ivory Business Solutions');
        const content2 = document.createElement('p')
        const line2 = document.createTextNode('Toronto, Canada   2020/09 - 2020/12')

        content1.appendChild(line1)
        content2.appendChild(line2)
        content2.appendChild(typedCon)
        newBox.appendChild(content1)
        newBox.appendChild(content2)
        newBox.appendChild(backBtn)
        newCon.appendChild(newBox)
        section.appendChild(newCon)
    }else if(num===2){
        const content1 = document.createElement('h3')
        const line1 = document.createTextNode('Banking Intern - Industrial & Commercial Bank of China');
        const content2 = document.createElement('p');
        const line2 = document.createTextNode('Xunyang, China   2019/07 - 2019/08');

        content1.appendChild(line1)
        content2.appendChild(line2)
        content2.appendChild(typedCon)
        newBox.appendChild(content1)
        newBox.appendChild(content2)
        newBox.appendChild(backBtn)
        newCon.appendChild(newBox)
        section.appendChild(newCon)
    }
    

    var typed = new Typed('#new-content', {
        strings: input[num],  typeSpeed: 20,
    });
}
