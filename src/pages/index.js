import Image from "next/image";
import { Inter } from "next/font/google";
import FrequentAskedQuestions from './repeated'
// import question from '../../public/question.jpg'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const question1=`Where does dr.Vivek patil practice?`
  const answer1=`Dr.Vivek patil is a cardiologist by training and has completed his MBBS`
  const question2=`What is Dr.vivek patil education qualifcation?`
  const answer2=`Dr,vivek patil education qualification MBBS`
  const question3=`How many years and experience Dr.vivek patil have?`
  const answer3=`Dr.vivek patil experience has 7years`
  const question4=`when Vivek patil see the patients?`
  const answer4=`Dr.vivek patil see patients on Monday,Tuesday,Wednesday,Friday,Saturday`
  const frequentAskedQuestion={[question1]:answer1,[question2]:answer2,[question3]:answer3,[question4]:answer4  }
  return (
    <main className="h-screen w-screen border border-black bg-[url('../../public/question.jpg')] bg-cover bg-center  bg-left bg-no-repeat flex flex-col justify-center items-center gap-2">
      <h1 className="text-center glass p-2 w-[20%]">FrequentAskedQuestion</h1>
      <div className="glass h-[70%] w-[60%] border border-green-500 flex  flex-col justify-center items-center gap-2 overflow-auto">

      {
        Object.entries(frequentAskedQuestion).map((e,i)=>{
          console.log(e[0])
          return (<FrequentAskedQuestions key={i} question={e[0]} answer={e[1]} />)


        })
      }
      </div>
    </main>
  );
}
