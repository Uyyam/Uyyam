import Image from "next/image";
import styles from "/src/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <a href= "https://www.linkedin.com/in/may-q-yu/" target="_blank">LinkedIn</a> 
      <main className={styles.main}>
        <h1>Hello, Welcome to My Site</h1>
        <ul>
          <li>
            This is a React.js page built with the Next.js framework 
          </li>
          <li>I installed created the app by running the command: npx create-next-app@latest</li>
          <li>I already had node.js installed from a former project, I updated to version 18.18.0 to use next.js</li>
          <li>The framework has a lot built in, with a site template that I can use and CSS styling already applied</li>
          <li>I appreciate the component based structure of React and like the ease of the next framework for developing a page</li>
        </ul><br></br>
        <p>The site is hosted on my personal GitHub through GitHub pages: <a href="https://github.com/Uyyam" target="_blank">My GitHub Account</a></p>
        <Image src="/chopper.png" alt="My Headshot" width={300} height={300}></Image>
        
        
      </main>
    </div>
  );
}
