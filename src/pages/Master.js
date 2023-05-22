import React, { useState } from "react";
import Layout from "../components/Layout";
import { ReactComponent as SearchIcon } from "../assets/svg/zoom.svg";
import { ReactComponent as SortIcon } from "../assets/svg/phosphor-asset.svg";
import { ReactComponent as FilterIcon } from "../assets/svg/material-asset.svg";
import Image1 from "../assets/image/1.jpg";
import Image2 from "../assets/image/2.jpg";
import Image3 from "../assets/image/3.jpg";
import Image4 from "../assets/image/4.jpg";
import Avatar1 from "../assets/avatar/1.jpg";
import Avatar2 from "../assets/avatar/2.jpg";
import Avatar3 from "../assets/avatar/3.jpg";
import Avatar4 from "../assets/avatar/4.jpg";
import Avatar5 from "../assets/avatar/5.jpg";
import Avatar6 from "../assets/avatar/6.jpg";
import Avatar7 from "../assets/avatar/7.jpg";
import Avatar8 from "../assets/avatar/8.jpg";
import UserAvatar from "../assets/avatar/user.png";

const Master = () => {
  const [value, setValue] = useState("Adding a new task...");
  return (
    <Layout tab={0}>
      <div className="top">
        <div className="title">Master Library</div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="btn-group">
          <div className="btn">
            <SortIcon />
            <div className="text">Sort</div>
          </div>
          <div className="btn">
            <FilterIcon />
            <div className="text">Filter</div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="classification">
          <div className="name">Contracts</div>
          <div className="content">
            <div className="card">
              <div className="image">
                <img src={Image1} alt="Contract" />
              </div>
              <div className="text">Non-Disclosure Agreement</div>
              <div className="tag">
                <div className="tag-item sky">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item blue">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar3} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar1} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar2} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text">Reperhenderit adipisicing irur</div>
              <div className="tag">
                <div className="tag-item purple">Label</div>
                <div className="tag-item sky">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar4} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar2} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text">Cupidatat commodo incididun</div>
              <div className="tag">
                <div className="tag-item orange">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item red">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar6} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar5} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text">
                Voluptate amet nostrud veniam aliqua voluptate eu laboris non
                incididunt enim aute aliqua aliqua esse cillum
              </div>
              <div className="tags">
                <div className="tag">
                  <div className="tag-item gray">Label</div>
                  <div className="tag-item sky">Label</div>
                  <div className="tag-item purple">Label</div>
                  <div className="tag-item tertiary">Label</div>
                </div>
                <div className="tag">
                  <div className="tag-item orange">Label</div>
                  <div className="tag-item blue">Label</div>
                </div>
              </div>

              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar5} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar4} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <div className="icon plus" />
            <div className="text">Add task</div>
          </div>
        </div>

        <div className="classification">
          <div className="name">Client Communications</div>
          <div className="content">
            <div className="card">
              <div className="image">
                <img src={Image2} alt="Client" />
              </div>
              <div className="text">New Client Onboarding Letter</div>
              <div className="tag">
                <div className="tag-item sky">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item blue">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="chat icon" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar3} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar1} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar2} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text blue">Legal Marketing Template</div>
              <div className="tag">
                <div className="tag-item purple">Label</div>
                <div className="tag-item green">Label</div>
                <div className="tag-item red">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar8} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar5} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar7} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text">Client Holiday Greetings</div>
              <div className="tag">
                <div className="tag-item sky">Label</div>
                <div className="tag-item orange">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar5} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar6} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar4} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text">Client Termination Letter</div>
              <div className="tag">
                <div className="tag-item sky">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item green">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar6} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar1} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card outline">
              <div className="text">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="tag">
                <div className="tag-item outline">Add label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div>
                    <div className="icon attachement" />
                    <div className="icon chat" />
                  </div>
                </div>
                <div className="right">
                  <div className="avatar user">
                    <img src={UserAvatar} alt="Avatar" />
                  </div>
                  <div className="avatar user">
                    <img src={UserAvatar} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="classification">
          <div className="name">Legal Compliance</div>
          <div className="content">
            <div className="card">
              <div className="image">
                <img src={Image3} alt="Compliance" />
              </div>
              <div className="text">FTC Green Guides Advertising Review</div>
              <div className="tag">
                <div className="tag-item sky">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item red">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="chat icon" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar1} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar8} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text red">Pharmaceutical Advertising</div>
              <div className="text">
                Upload your marketing copy and this AI module will do a
                compliance review with FDA and Code of Federal Regulations (CFR)
                Title 21 (United States)
              </div>
              <div className="tag center">
                <div className="tag-item sky">Label</div>
                <div className="tag-item purple">Label</div>
              </div>
            </div>

            <div className="card">
              <div className="text">Data Protection Policy</div>
              <div className="tags">
                <div className="tag">
                  <div className="tag-item gray">Label</div>
                  <div className="tag-item sky">Label</div>
                  <div className="tag-item purple">Label</div>
                  <div className="tag-item tertiary">Label</div>
                </div>
                <div className="tag">
                  <div className="tag-item orange">Label</div>
                  <div className="tag-item blue">Label</div>
                </div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="attachement icon" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="chat icon" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar6} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar8} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn">
            <div className="icon plus" />
            <div className="text">Add task</div>
          </div>
        </div>

        <div className="classification">
          <div className="name">Legal Reasoning</div>
          <div className="content">
            <div className="card">
              <div className="image">
                <img src={Image4} alt="Reasoning" />
              </div>
              <div className="text red">Trademark Registration</div>
              <div className="text">
                This AI is trained on USPTO TM guidelines. Enter a mark and the
                AI will provide analysis
              </div>
              <div className="tag center">
                <div className="tag-item sky">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item blue">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="chat icon" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar7} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar8} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar5} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text red">Can I Copyright This?</div>
              <div className="tag">
                <div className="tag-item blue">Label</div>
                <div className="tag-item purple">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar2} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar7} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text red">Case Law Research</div>
              <div className="tag">
                <div className="tag-item green">Label</div>
                <div className="tag-item purple">Label</div>
                <div className="tag-item tertiary">Label</div>
              </div>
              <div className="footer">
                <div className="left">
                  <div className="attachement">
                    <div className="icon attachement" />
                    <div className="text">3</div>
                  </div>
                  <div className="chat">
                    <div className="icon chat" />
                    <div className="text">1</div>
                  </div>
                </div>
                <div className="right">
                  <div className="avatar">
                    <img src={Avatar1} alt="Avatar" />
                  </div>
                  <div className="avatar">
                    <img src={Avatar5} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Master;
