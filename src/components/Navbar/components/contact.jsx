import React from "react";
import { UserRound, MessageCircleQuestionMark, Search } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex items-center gap-6">
      <Search />
      <MessageCircleQuestionMark />
      <UserRound />
    </div>
  );
};

export default Contact;
