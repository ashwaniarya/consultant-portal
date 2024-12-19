"use client";

import { useEffect, useState, useRef } from "react";
import { getChat, continueChat } from "../../../network/apiService";
import TitleBody from "@/components/TitleBody";
import Typography from "@/components/Typography";
import { formatDateTime } from "@/helper";
import { BaseCard } from "@/components/Card";
import Section from "@/components/Section";
import BaseButton from "@/components/Button";
import { useParams } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const [slug, setSlug] = useState("");
  const paramsPromise = useParams();

  const [lastChattedOn, setLastChattedOn] = useState("");
  const [resolutionStatus, setResolutionStatus] = useState("pending");
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");

  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot"; timestamp: number }>
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      const slug = (await paramsPromise.slug) as string;
      setSlug(slug);

      // Fetch chat data
      const chatData = await getChat(slug);
      setLastChattedOn(chatData.data.lastChattedOn);
      setResolutionStatus(chatData.data.resolutionStatus);
      setCustomerName(chatData.data.customerName);
      setProductName(chatData.data.productName);
      setMessages(chatData.data.messages);
      // Scroll to bottom after messages are loaded
      setTimeout(scrollToBottom, 100);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "bot") {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        text: inputMessage,
        sender: "user",
        timestamp: Date.now(),
      },
    ]);
    setInputMessage("");

    // Use continueChat to send the message and get the bot response
    const chatResponse = await continueChat(slug, inputMessage);
    setMessages((prev) => [...prev, ...chatResponse.data.messages]);
  };

  return (
    <div>
      <Section className="flex flex-col gap-2 sm:gap-4">
        <div className="flex flex-col gap-2 sm:gap-4 rounded-lg p-2 sm:p-4 border border-gray-200 shadow-sm">
          <TitleBody title="Info" className="mt-2 sm:mt-4">
            <div className="grid grid-cols-1 sm:flex sm:flex-row gap-2 sm:gap-4 w-full mt-2 sm:mt-4">
              <BaseCard
                title={
                  <div className="flex flex-row gap-1 sm:gap-2 items-center">
                    <Typography variant="caption">LAST CHATTED ON</Typography>
                  </div>
                }
                className="flex-[1]"
              >
                <Typography variant="body">
                  {formatDateTime(lastChattedOn).date}
                </Typography>
              </BaseCard>
              <BaseCard
                title={
                  <div className="flex flex-row gap-1 sm:gap-2 items-center">
                    <Typography variant="caption">RESOLUTION STATUS</Typography>
                  </div>
                }
                className="flex-[1]"
              >
                <Typography variant="body">{resolutionStatus}</Typography>
              </BaseCard>
              <BaseCard
                title={
                  <div className="flex flex-row gap-1 sm:gap-2 items-center">
                    <Typography variant="caption">CUSTOMER NAME</Typography>
                  </div>
                }
                className="flex-[1]"
              >
                <Typography variant="body">{customerName}</Typography>
              </BaseCard>
              <BaseCard
                title={
                  <div className="flex flex-row gap-1 sm:gap-2 items-center">
                    <Typography variant="caption">PRODUCT NAME</Typography>
                  </div>
                }
                className="flex-[1]"
              >
                <Typography variant="body">{productName}</Typography>
              </BaseCard>
            </div>
          </TitleBody>
          <TitleBody title="Messages" className="mt-2 sm:mt-4">
            <div className="border rounded-lg p-2 sm:p-4 h-[300px] sm:h-[400px] mb-2 sm:mb-4 overflow-y-auto">
              {messages
                .reduce((acc: any[], message, index) => {
                  if (index === 0) {
                    return [{ ...message, messages: [message.text] }];
                  }

                  const lastGroup = acc[acc.length - 1];
                  if (lastGroup.sender === message.sender) {
                    lastGroup.messages.push(message.text);
                    return acc;
                  } else {
                    return [...acc, { ...message, messages: [message.text] }];
                  }
                }, [])
                .map((messageGroup, index) => (
                  <div
                    className={`flex flex-row gap-2 items-start mt-2 sm:mt-4 ${
                      messageGroup.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                    key={index}
                  >
                    {messageGroup.sender === "user" ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z"
                            fill="#666"
                          />
                          <path
                            d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                            fill="#666"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 20C9.33 20 7 18.67 7 16C7 13.33 9.33 12 12 12C14.67 12 17 13.33 17 16C17 18.67 14.67 20 12 20Z"
                            fill="#1E88E5"
                          />
                          <circle cx="12" cy="9" r="2" fill="#1E88E5" />
                          <rect
                            x="8"
                            y="14"
                            width="8"
                            height="2"
                            rx="1"
                            fill="#1E88E5"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      {messageGroup.messages.map(
                        (text: string, msgIndex: number) => (
                          <div
                            key={msgIndex}
                            className={`p-2 rounded-lg ${
                              messageGroup.sender === "user"
                                ? "bg-blue-100 max-w-[90%] sm:max-w-[80%]"
                                : "bg-gray-100 max-w-[90%] sm:max-w-[80%]"
                            }`}
                          >
                            {text}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>
          </TitleBody>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 border rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base"
              placeholder="Type your message..."
            />
            <BaseButton
              as="button"
              onClick={handleSendMessage}
              className="bg-primary text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base"
            >
              Send
            </BaseButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
