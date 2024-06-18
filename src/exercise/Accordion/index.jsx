import { useState } from "react";
import "./style.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function Accordion() {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((item, index) => {
        return (
          <AccordionItem
            title={item.title}
            index={index}
            key={index}
            currentOpen={currentOpen}
            setCurrentOpen={setCurrentOpen}
          >
            {item.text}
          </AccordionItem>
        );
      })}
      <AccordionItem
        title="Test 1"
        index={22}
        key={22}
        currentOpen={currentOpen}
        setCurrentOpen={setCurrentOpen}
      >
        <p>Using children props to set this text</p>
        <ul>
          <li>
            This gets the text elements that a compnen has between the oopen end
            close tag
          </li>
          <li>
            other tags in the elements will not be part of the children value
          </li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({
  title,
  index,
  currentOpen,
  setCurrentOpen,
  children
}) {
  const isOpen = index === currentOpen;

  const handleToggle = () => {
    setCurrentOpen(isOpen ? null : index);
  };

  return (
    <div
      key={index}
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default Accordion;
