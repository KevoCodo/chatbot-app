import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import React, { FC } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";

const Chat: FC = ({}) => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="relative bg-white z-40 shadow"
      >
        <AccordionItem value="item-1">
          <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow:hidden">
            <div className="w-full h-full flex flex-col">
              <AccordionTrigger>
                <ChatHeader />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col h-80">
                  messages
                  <ChatInput className="px-4" />
                </div>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Chat;
