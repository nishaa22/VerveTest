"use client";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../assests/Images";

function EventOverview() {
  return (
    <saction>
      <div
        className=" pt-20 pb-20 pl-40 pr-40 "
        style={{
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background:
            "url(https://cxloyaltymena.com/wp-content/uploads/backgrounds/cx-loyalty-summit-mena-2020-bg1.png)",
        }}
      >
        <div className="text-[#d65c85] font-[800] text-[20px] text-center">
          EVENT OVERVIEW
        </div>
        <div className="flex gap-10 justify-between pt-10">
          <div>
            <Image
              src={IMAGES.meetImage}
              width={"500px"}
              height={"500px"}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="w-[800px] text-[20px]">
            A strong customer experience, employee experience and customer
            loyalty program management are the hallmark of many of the world’s
            most successful brands – setting the bar for organizations across
            all industries to prioritize their CX, EX & CL strategies and
            deliver superior experiences across all channels. It’s no secret
            that over the past two years, customer expectations have evolved –
            making CX as one of the biggest differentiators between one’s brand
            and the competition. Two thirds of organizations globally now
            compete on customer experience alone with 87% of business leaders
            having identified CX as their top growth engine.
          </div>
        </div>
        <div className="mt-5 text-xl">
          The 2nd Annual CX & Loyalty Summit & Awards MENA 2023 shifts focus on
          innovative approaches that the world’s leading organizations are
          deploying to manage customer interactions and maximize customer value
        </div>
        <div className="mt-5 text-xl">
          A stellar line-up featuring leading brands and organizations who have
          established CX, EX & Customer Loyalty at the top of their boardroom
          agenda will share insights into how digital experiences are
          transforming the way we work, deliver, transact, communicate, and live
          in an ever-changing world. With interactive keynote sessions,
          expert-led panels, and live case studies, we aim to pack value into
          every minute of the attendee experience, covering the topics that mean
          the most to the CX industry.
        </div>
        <div></div>
      </div>
    </saction>
  );
}

export default EventOverview;
