import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-powoeredPractive & Feedback</h2>
          <p className="text-lg">Practice on real questions</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an interview</Link>
          </Button>
        </div>
        <Image
          className="max-sm:hidden"
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

          <p>You haven&apos;t taken any interviews yet</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-6">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
          <p>There are no interviews available</p>
        </div>
      </section>
    </>
  );
};

export default Page;
