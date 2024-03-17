import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>

            <header className="mx-auto mb-[120px] flex text-[#797673] max-w-[608px] justify-between">
                <div className="block leading-[24px]  box-border font-[500]">
                    <Link href={'/'}><h1 className="text-highlight">Aditya Sawant</h1></Link>
                    Computer Engineer | Web Developer
                    <br />
                    Thane, Maharashtra
                </div>
            </header>
            <main>
                <section className="mb-[60px] font-blanco font-[500]">
                    <h2 className="text-highlight mx-auto max-w-[608px] my-6" >About</h2>
                    {/* <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]" >I’m a designer with 20 years of experience in brand, product design, and creative direction. I have an international reputation for creating warm, smart, and effective design for a variety of companies in technology and publishing. Among these is <Link href={'/#'} className="decoration-[#797673] underline italic" >Abstract</Link>  (acq. Adobe), which I co-founded in 2014. I’m head of brand at Modern Treasury.
                    </p> */}
                    <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">👋 Hey there! I&apos;m deeply passionate about technology and constantly seeking innovative solutions to real-world problems. As a dedicated software engineering student at SAKEC, I&apos;m on a mission to make a meaningful impact through my work.
                    </p>
                    <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">💻 <strong>Skillset</strong>: My expertise lies in web development and software engineering, with a strong command over technologies like Node.js, Next.js, P5.js, PHP, Python, and JavaScript. Whether it&apos;s crafting seamless web experiences or architecting robust software solutions, I&apos;m always up for the challenge.
                    </p>
                    <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">📜 <strong>Certifications</strong>: I&apos;ve earned certifications in Python and Java from NPTEL, as well as certifications in Python, Java, and C from Spoken Tutorial by IIT. These credentials validate my proficiency and dedication to mastering diverse programming languages.
                    </p>
                    <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">🌟 <strong>Passion</strong>: I&apos;m driven by creativity and technology&apos;s endless possibilities. Whether it&apos;s crafting elegant code or envisioning groundbreaking research, I&apos;m committed to harnessing technology for positive change and innovation.
                    </p>

                </section>


                {/* Contacts */}
                <section className="mb-[60px] font-blanco font-[500]">
                    <h2 className="text-highlight mx-auto max-w-[608px] my-6" >Contact</h2>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">Email</div>
                        <div className=""><Link href={'mailto:arsawant09@gmail.com'} target="_blank" className="decoration-[#797673] underline" >arsawant09@gmail.com</Link></div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">Github</div>
                        <div className=""><Link href={'https://github.com/AdityaSawant0912'} target="_blank" className="decoration-[#797673] underline" >AdityaSawant0912</Link></div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">Linkedin</div>
                        <div className=""><Link href={'https://www.linkedin.com/in/adityasawant09/'} target="_blank" className="decoration-[#797673] underline" >adityasawant09</Link></div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">X (Twitter)</div>
                        <div className=""><Link href={'https://www.x.com/in/adzzhere/'} target="_blank" className="decoration-[#797673] underline" >adzzhere</Link></div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">Resume</div>
                        <div className=""><Link href={'/Aditya Sawant Resume.pdf'} target="_blank" className="decoration-[#797673] underline" >Aditya Sawant</Link></div>
                    </div>
                </section>

                {/* Featured Talks */}
                <section className="mb-[60px] font-blanco font-[500]">
                    <h2 className="text-highlight mx-auto max-w-[608px] my-6" >Featured Talks</h2>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">05 Aug 2023</div>
                        <div className="">
                            <Link href={'https://www.sakec.ac.in/csi-sakec/mastering-the-web/'} target="_blank" className="decoration-[#797673] underline text-highlight" >Mastering the Web</Link>
                            <small>SAKEC, Mumbai</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                In the event I taught HTML, CSS, JavaScript, Node.js, and Database connectivity for web app development, promoting hands-on learning and motivating junior students to refine skills. Attendees presented Mini Projects utilizing web technologies.
                            </p>
                        </div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">20 Jan 2023</div>
                        <div className="">
                            <Link href={'https://www.sakec.ac.in/csi-sakec/level-up-creative-coding-with-p5-js/'} target="_blank" className="decoration-[#797673] underline text-highlight" >Level Up Creative Coding with P5.js</Link>
                            <small>SAKEC, Mumbai</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                The session I conducted covered P5.js and JavaScript basics, supplying materials and setup files. Topics included variables, functions, loops, and shape manipulation, with participants creating projects like designs and wall art.
                            </p>
                        </div>
                    </div>

                </section>

                {/* Projects */}
                <section className="mb-[60px] font-blanco font-[500]">
                    <h2 className="text-highlight mx-auto max-w-[608px] my-6" >Projects</h2>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2023 - Present</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                S3A-Net: Spatial-Spectral Self-Attention Network for Few-Shot Learning-Based Hyperspectral Image Classification
                            </h1>
                            <small>Description of the project Or explain in 1 line.</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                This research paper, conducted under the guidance of Dr. Manimala Mahato from SAKEC and Prof. Biplab Banerjee from IIT Bombay, proposes the S3A-Net, a novel Spatial-Spectral Self-Attention Network, for few-shot learning-based hyperspectral image classification. The S3A-Net leverages self-attention mechanisms to effectively capture spatial and spectral features, enhancing the discriminative capabilities of the classification model. By integrating few-shot learning techniques, the proposed framework enables accurate classification even with limited labeled training samples, addressing the challenges posed by the scarcity of labeled hyperspectral data. Experimental results demonstrate the superiority of the S3A-Net over existing methods in terms of classification accuracy and robustness, highlighting its potential for various remote sensing applications.
                            </p>
                        </div>
                    </div>

                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2022 - 2023</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Plan It
                            </h1>
                            <small>Third Year Engineering Project</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                &quot;Plan-It&quot; addresses the complexities of task management by providing a comprehensive solution enriched with Natural Language Processing (NLP) integration. It simplifies personal and team-level task organization through intuitive interfaces, seamless collaboration features, and NLP-driven smart task suggestions. Challenges arose during NLP implementation, particularly in accurately interpreting user inputs for task creation. However, through meticulous research, framework selection, training, testing, and iterative improvement, these hurdles were overcome. The result is a robust task management system that empowers users to achieve their goals effectively while ensuring data security and privacy.
                            </p>
                        </div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2021 - 2022</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Project Gallery
                            </h1>
                            <small>Second Year Engineering Project</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                &quot;Project Gallery&quot; serves as a pivotal platform for SAKEC students to exhibit their diverse range of projects, spanning from software applications to research endeavors. It simplifies project discovery for students and professors, streamlining access to relevant initiatives and fostering collaboration. Despite challenges in integrating third-party image hosting services and managing sessions securely, thorough research, iterative improvements, and rigorous testing ensured successful project implementation. Ultimately, &quot;Project Gallery&quot; enhances the educational experience by facilitating innovation, collaboration, and cross-disciplinary knowledge sharing within the SAKEC community.
                            </p>
                        </div>
                    </div>

                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2020 - 2023</div>
                        <div className="">

                            <Link href={'https://adityasawant0912.github.io/P5JS-MiniProjects/'} target="_blank" className="decoration-[#797673] underline text-highlight" >Mini Project in P5.JS</Link>
                            <small>Personal Project</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                I have embarked on numerous mini projects utilizing P5.js, encompassing a diverse array of visualizations and applications. These include creations such as <em>Ray Tracing 2D & 3D</em> and <em>Fractal Tree Animations</em>, as well as game remakes including <em>Flappy Bird</em>, <em>Game of Life</em>, <em>Minesweeper</em>, and <em>Snake</em>. Additionally, I&apos;ve delved into engineering concepts through projects such as implementing the <em>A* algorithm</em>, solving the <em>8 Queens problem</em>, exploring <em>K-means clustering</em>, and simulating <em>Epsilon NFA</em>. These projects not only bolstered my understanding of programming and visualization techniques but also provided practical insights into engineering principles covered in my syllabus.

                            </p>
                        </div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2018 - 2020</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Green Light for Emergency Vehicles
                            </h1>
                            <small>NES Ratnam, Bhandup & WMJC, Mulund</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                Developed during my junior college years, my electronics project aimed to alleviate the issue of emergency vehicles getting stuck in traffic by implementing a transponder system that communicates with traffic signals to grant priority access. Utilizing Arduino technology paired with a Bluetooth module, the transponder facilitated communication between vehicles and signals, enabling the allocation of green lights to the designated lane or side. The project presented a practical solution to enhance emergency response efficiency and safety on the roads, with potential for further advancements using WiFi modules for internet connectivity.
                            </p>
                        </div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2018</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Salary Management Software
                            </h1>
                            <small>Python-driven Salary Management: Calculating Compensation with Confidence</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                Creating a salary management software in Python was my inaugural full-fledged project, which I&apos;m immensely grateful for, as it provided a valuable learning experience. The software&apos;s primary function was to accurately calculate the salaries of employees. Under the guidance and opportunity presented by my aunt, I embarked on this endeavor, which allowed me to deepen my understanding of Python programming and software development principles. Throughout the project, I gained practical insights into various aspects of software engineering, including data handling, calculations, and user interface design. This project not only honed my technical skills but also instilled in me a sense of responsibility and dedication towards delivering a functional and efficient solution. I am thankful for the opportunity to undertake this project, as it marked a significant milestone in my journey as a software developer and provided a solid foundation for future endeavors in the field.
                            </p>
                        </div>
                    </div>

                </section>

                {/* Work Experience */}
                <section className="mb-[60px] font-blanco font-[500]">
                    <h2 className="text-highlight mx-auto max-w-[608px] my-6" >Work Experience</h2>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2024</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Full stack Web Developer Intern at The Kutchi Printers & Allied Industries Association
                            </h1>
                            <small>Thane & Remote - <Link href={'https://kpaia.in'} target="_blank" className="decoration-[#797673] underline" >kpaia.in</Link></small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                I developed a comprehensive web portal for an association of printers, designed to streamline inquiry management from clients by categorizing inquiries into specific printing categories and efficiently distributing them to association members specializing in corresponding areas. The system facilitated client inquiry submission through a user-friendly interface, with inquiries promptly routed to members via email notifications. Additionally, the portal featured strategically placed advertisements to promote member businesses. Its intuitive interface, scalability, and flexibility ensured efficient operations and the ability to adapt to evolving needs, ultimately enhancing inquiry response times and providing increased visibility and opportunities for association members within the industry.
                            </p>
                        </div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2023</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Full stack Web Developer Intern working under Mr. Vinayak Shastri
                            </h1>
                            <small>Mumbai & Remote</small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                My team and I collaborated on developing an Agenda Builder website tailored for event management purposes. Recognizing the critical need for seamless communication within remote teams organizing events, we prioritized creating a platform that facilitates real-time interaction and organization. The website offers a user-friendly interface where team members can collaboratively manage and organize different sections of the event. Key features include drag-and-drop functionality, allowing for effortless rearrangement and customization of event elements. Additionally, the platform integrates various tools and resources to streamline event planning, such as scheduling, task assignment, and document sharing capabilities. By providing a centralized hub for team communication and event coordination, the Agenda Builder significantly enhances efficiency and productivity in the event management process. Moreover, the website's intuitive design promotes ease of use, ensuring that even non-technical team members can effectively contribute to the planning and execution of successful events.
                            </p>
                        </div>
                    </div>
                    <div className="split mx-auto max-w-[608px]">
                        <div className="label">2022-2023</div>
                        <div className="">
                            <h1 className="text-highlight my-0">
                                Full stack Web Developer Intern at Indian Development Foundation
                            </h1>
                            <small>Mumbai & Remote - <Link href={'https://idfbalgurukul.com'} role="link" aria-disabled="true" disabled={true} className="decoration-[#797673] underline cursor-not-allowed pointer-events-none" >idfbalgurukul.com</Link></small>
                            <p className="text-def mx-auto max-w-[608px] mt-[18px] leading-[27px] font-[400] text-[18px]">
                                My team and I collaborated to develop a website for the Indian Development Foundation (IDF), aimed at managing Balgurukul (small school) operations, including teacher, student, and management interactions. We implemented role-based logins for teachers, students, and administrators to streamline access. The primary challenge we addressed was the grading process, which previously relied on manual input through Google Forms, leading to redundant data entry and inefficiencies. To mitigate this issue, we designed an intuitive user interface that simplified the grading process significantly, alleviating the burden on teachers and enhancing overall efficiency. By automating and optimizing the grading workflow, we improved the educational experience for both teachers and students while enhancing the operational effectiveness of IDF&apos;s Balgurukul program.
                            </p>
                        </div>
                    </div>

                </section>


            </main>

        </>
    );
}
