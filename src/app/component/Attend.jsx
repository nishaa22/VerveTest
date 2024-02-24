import Image from "next/image";
import React from "react";
import { IMAGES } from "../assests/Images";

function Attend() {
  return (
    <section
      className="pt-20 pb-20 pl-40 pr-40 gap-10"
      style={{
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        background:
          "url(https://cxloyaltymena.com/wp-content/uploads/backgrounds/cx-loyalty-summit-mena-2020-bg2.png)",
      }}
    >
      <div>
        <div>
          <h3>WHY ATTEND?</h3>
          <div className="flex gap-10">
            <div>
              <Image
                src={IMAGES.attendImage}
                width={"500px"}
                height={"500px"}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="w-[600px]">
              The 2nd Annual CX & Loyalty Summit & Awards MENA 2023 will bring
              together senior industry professionals across all industries and
              verticals to talk all things CX, EX, Loyalty, Customer Service,
              Digital Trends and much more. The Summit will explore emerging CX
              strategies, the latest technologies – Digital, Automation and best
              practices that will keep your organization at the forefront of CX,
              EX & CL excellence. Delegates will experience a power-packed
              agenda consisting of presentations, panel discussions and keynotes
              from globally renowned speakers, panelists and moderators. At the
              event, you will have the opportunity to network with and gain
              knowledge from industry specialists from around the globe and form
              partnerships with these specialists.
            </div>
          </div>
        </div>
        <div>
          At 2nd Annual CX & Loyalty Summit & Awards MENA 2023, you’ll hear the
          most innovative approaches that the world’s leading organizations are
          deploying to manage customer interactions and maximize customer value.
          If you are ready to innovate and join the ranks of the biggest
          innovators while resonating with the following reasons compelling
          enough to attend, then register today:
        </div>

        <div>
          Gain Knowledge and Insights from Top Industry Leaders and Experts from
          across the globe Network with Industry Peers in a solution-oriented
          environment Discuss Significant Partnerships and Collaborations with
          Industry leaders Deep Dive into Insights derived from real-time case
          studies Build Industry Ecosystem Collaboration to address latest
          challenges
        </div>
      </div>
    </section>
  );
}

export default Attend;
