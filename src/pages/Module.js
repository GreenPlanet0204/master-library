import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";

const Module = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const [module, setModule] = useState({
    name: "",
    description: "",
  });

  const [prompt, setPrompt] = useState({
    contract: "",
    agreement: "",
    suggest: true,
    written: true,
  });

  const upload = useRef();

  const uploadOpen = () => {
    upload.current.click();
  };

  const [reasoning, setReasoning] = useState({
    description: "",
    rule: "",
    instruction: "",
  });

  const [communication, setCommunication] = useState({
    description: "",
    library: true,
    template: "",
  });

  const initCheck = {
    document: false,
    reasoning: false,
    reviews: false,
    contract: false,
    communication: false,
    briefing: false,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  };

  const getName = () => {
    let name = "step-" + step;
    if (check.document && step === 3) {
      name += "-" + subStep;
    }
    return name;
  };

  const prevStep = () => {
    if (subStep === 2 && step === 3) {
      setSubStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const nextStep = () => {
    if (subStep === 1 && step === 3 && check.document) {
      setSubStep(2);
    } else {
      setStep(step + 1);
    }
  };

  const [check, setCheck] = useState(initCheck);
  return (
    <Layout tab={2}>
      <div className="top">
        <div className="title dark-blue">AI Module Builder</div>
      </div>
      {!(step === 3 && subStep === 2) && (
        <>
          <div className="subtitle">
            Step {step} {step === 4 && <>Test Your Module</>}
          </div>
          {check.communication && step === 3 && (
            <div className="textarea">
              <div className="label">
                Tell the AI what this communication is and what it will be used
                for.
              </div>
              <textarea />
            </div>
          )}
        </>
      )}

      {step !== 4 && (
        <div
          className={check.document ? "step" : "step document"}
          id={getName()}
        >
          {step === 1 && (
            <>
              <div className="step-header">
                <div className="subtitle">Create Your New AI Module</div>
                <div className="btn">
                  <CloseIcon />
                </div>
              </div>
              <div className="form-group">
                <div className="label">Module Name</div>
                <input
                  type="text"
                  className="form-control"
                  value={module.name}
                  placeholder="Enter item name"
                  onChange={(e) =>
                    setModule({ ...module, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <div className="label">Description</div>
                <textarea
                  className="form-control"
                  value={module.description}
                  placeholder="Enter item description"
                  onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                  }
                />
              </div>
              <div className="folder">
                <div className="folder icon" />
                <div className="dropdown">
                  <div className="text">Choose Save Folder</div>
                  <div className="icon" />
                </div>
                <div className="add">
                  <div className="icon" />
                  <div className="text">Add New Folder</div>
                </div>
              </div>
              <div className="tag">
                <div className="tag icon" />
                <div className="tag-item">enter tag</div>
                <div className="tag-item">enter tag</div>
                <div className="tag-item">enter tag</div>
                <div className="icon add" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="step-header">
                <div className="subtitle">Choose The Type of AI Module</div>
                <div className="btn">
                  <CloseIcon />
                </div>
              </div>
              <div className="step-card">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.document}
                    onChange={() =>
                      setCheck({
                        ...initCheck,
                        document: !check.document,
                      })
                    }
                  />
                  <div className="label">
                    Document Drafting (Create Your Agreements Library)
                  </div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.reasoning}
                    onChange={() =>
                      setCheck({ ...initCheck, reasoning: !check.reasoning })
                    }
                  />
                  <div className="label">Legal Reasoning</div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.reviews}
                    onChange={() =>
                      setCheck({ ...initCheck, reviews: !check.reviews })
                    }
                  />
                  <div className="label">
                    Document Reviews (Summarrize and Determine if Balanced)
                  </div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.contract}
                    onChange={() =>
                      setCheck({ ...initCheck, contract: !check.contract })
                    }
                  />
                  <div className="label">
                    Contract Clauses (Create or tTain AI on Your Clauses)
                  </div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.communication}
                    onChange={() =>
                      setCheck({
                        ...initCheck,
                        communication: !check.communication,
                      })
                    }
                  />
                  <div className="label">
                    Client Communications (Draft New Client Enagagement etter)
                  </div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.briefing}
                    onChange={() =>
                      setCheck({ ...initCheck, briefing: !check.briefing })
                    }
                  />
                  <div className="label">Case Briefing</div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.checkbox1}
                    onChange={() =>
                      setCheck({ ...initCheck, checkbox1: !check.checkbox1 })
                    }
                  />
                  <div className="label">Checkbox</div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.checkbox2}
                    onChange={() =>
                      setCheck({ ...initCheck, checkbox2: !check.checkbox2 })
                    }
                  />
                  <div className="label">Checkbox</div>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={check.checkbox3}
                    onChange={() =>
                      setCheck({ ...initCheck, checkbox3: !check.checkbox3 })
                    }
                  />
                  <div className="label">Checkbox</div>
                </div>
              </div>
            </>
          )}

          {step === 3 && !check.communication && (
            <>
              <div className="step-header">
                <div className="subtitle">Let's Train Your AI Module</div>
                <div className="btn">
                  <CloseIcon />
                </div>
              </div>
              {check.document && (
                <>
                  {subStep === 1 && (
                    <>
                      <div className="blue-text first">
                        Training your AI by uploading or pasting your own
                        contracts, documents, memorandum,legal summaries or any
                        reference material for AI to learn.
                      </div>
                      <div className="step-card">
                        <div className="subtitle black">Upload files</div>
                        <div className="drop">
                          <div className="icon" />
                          <div className="subtext">Drop files here</div>
                          <div className="support">Supported formats: PDF</div>
                          <div className="or">OR</div>
                          <div className="browse" onClick={uploadOpen}>
                            Browse files
                          </div>
                        </div>
                        <div className="step-footer">
                          <button className="btn upload" disabled>
                            Upload
                          </button>
                          <button className="btn back">Cancel</button>
                        </div>
                      </div>
                      <div className="document gray">Enter Document Name</div>
                      <div className="document">
                        Add to Your Documents Library? Y or N
                      </div>
                    </>
                  )}
                  {subStep === 2 && (
                    <>
                      <div className="blue-text">
                        Training your AI by uploading or pasting your own
                        contracts, documents, memorandum,legal summaries or any
                        reference material for AI to learn. Now, lets training
                        the AI on what the document or pasted text is.
                      </div>
                      <div className="gray-panel">
                        <div className="text">
                          Let's start with your first prompt. You want to make
                          an AI module for Contract Drafting (based on selected
                          in step 2.)
                        </div>
                        <div className="form-group">
                          <div className="label">
                            1) Tell me what this contract will be used for.
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Input text"
                            value={prompt.contract}
                            onChange={(e) =>
                              setPrompt({ ...prompt, contract: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <div className="label">
                            2) Next, when I draft future agreements from this
                            contract which are the inputs I should change?
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            value={prompt.agreement}
                            placeholder="Input text"
                            onChange={(e) =>
                              setPrompt({
                                ...prompt,
                                agreement: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <div className="label">
                            3) Do you want me to suggest changes or balance it
                            for both parties or favor one party?
                          </div>
                          <div className="radio">
                            <div className="option">
                              <input
                                type="radio"
                                name="suggest"
                                value="Yes"
                                checked={prompt.suggest}
                                onChange={() =>
                                  setPrompt({ ...prompt, suggest: true })
                                }
                              />
                              <label>Yes</label>
                            </div>
                            <div className="option">
                              <input
                                type="radio"
                                name="suggest"
                                value="No"
                                checked={!prompt.suggest}
                                onChange={() =>
                                  setPrompt({ ...prompt, suggest: false })
                                }
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="label">
                            4) Do you want me to use this agreement EXACTLY as
                            you written it?
                          </div>
                          <div className="radio">
                            <div className="option">
                              <input
                                type="radio"
                                value="Yes"
                                name="written"
                                checked={prompt.written}
                                onChange={() =>
                                  setPrompt({ ...prompt, written: true })
                                }
                              />
                              <label>Yes</label>
                            </div>
                            <div className="option">
                              <input
                                type="radio"
                                value="Yes"
                                name="written"
                                checked={!prompt.written}
                                onChange={() =>
                                  setPrompt({ ...prompt, written: false })
                                }
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                        <div className="text red">
                          *If Yes, the prompt to Feed ChatGPT is the ChatGPT
                          MUST use this exact contract and not change it.
                        </div>
                      </div>
                      <div className="reference">
                        *** Based on the answers above, our tool takes the
                        answers and inputs ithem into GPT to train it based on
                        the answers and waht the user wants from AI when making
                        future contracts
                      </div>
                    </>
                  )}
                </>
              )}
              {check.reasoning && (
                <>
                  <div className="blue-text first">
                    Training your AI to assist with legal reasoning. This AI
                    Module can be trained
                  </div>
                  <div className="reasoning">
                    <div className="textarea-group">
                      <div className="blue-label">
                        Describe what you want your AI Module to do for you
                      </div>
                      <textarea
                        value={reasoning.description}
                        className="description"
                        placeholder="Example:  I want you to review ad copy and advise if it is in violation of our company's  pharma advertising guidelines"
                        onChange={(e) =>
                          setReasoning({
                            ...reasoning,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="hint-group">
                      <div className="blue-label">
                        We will apply legal reasoning following the Issue, Rule,
                        Application, Conclusion Technique
                      </div>
                      <div className="blue-hint">
                        * Hint AI learns better if you prepare a memorandum on
                        the law to follow as if you were training a law student.
                      </div>
                    </div>
                    <div className="textarea-group">
                      <div className="label">
                        What is the Rule? Please list the statues, case law,
                        regulations, legal memorandum, guideline that you want
                        the AI module to learn and apply?
                      </div>
                      <textarea
                        className="rule"
                        value={reasoning.rule}
                        onChange={(e) =>
                          setReasoning({ ...reasoning, rule: e.target.value })
                        }
                      />
                    </div>
                    <div className="textarea-group">
                      <div className="label">
                        Provide any additional instructions to aid the AI in
                        understanding RULE or drafting a conclusion for you.
                      </div>
                      <textarea
                        className="instruction"
                        value={reasoning.instruction}
                        placeholder="Enter item description"
                        onChange={(e) =>
                          setReasoning({
                            ...reasoning,
                            instruction: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {step === 3 && check.communication && (
            <>
              <div className="step-header">
                <div className="subtitle">
                  Upload or paste template communications
                </div>
                <div className="btn">
                  <CloseIcon />
                </div>
              </div>
              <div className="blue-text">
                Training your AI by uploading or pasting your own communications
                such as template engagement letters, cease and desist notices or
                even holiday greetings.
              </div>
              <div className="row">
                <div className="step-card upload">
                  <div className="subtitle black">Upload files</div>
                  <div className="drop">
                    <div className="icon" />
                    <div className="subtext">Drop files here</div>
                    <div className="support">Supported formats: PDF</div>
                    <div className="or">OR</div>
                    <div className="browse" onClick={uploadOpen}>
                      Browse files
                    </div>
                  </div>
                  <div className="document gray">Enter Document Name</div>
                  <div>
                    <div className="document">
                      Add to Your Documents Library?
                    </div>
                    <div className="radio">
                      <div className="option">
                        <input
                          type="radio"
                          name="library"
                          value="Yes"
                          checked={communication.library}
                          onChange={() =>
                            setCommunication({
                              ...communication,
                              library: true,
                            })
                          }
                        />
                        <label>Yes</label>
                      </div>
                      <div className="option">
                        <input
                          type="radio"
                          name="library"
                          value="No"
                          checked={!communication.library}
                          onChange={() =>
                            setCommunication({
                              ...communication,
                              library: false,
                            })
                          }
                        />
                        <label>No</label>
                      </div>
                    </div>
                  </div>

                  <div className="step-footer">
                    <button className="btn next">Upload</button>
                    <button className="btn back">Cancel</button>
                  </div>
                </div>
                <div className="step-card paste">
                  <div className="subtitle black">
                    Paste template communications
                  </div>
                  <div className="textarea">
                    <textarea />
                  </div>
                  <div className="step-footer">
                    <button className="btn next">Create</button>
                    <button className="btn back">Cancel</button>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="step-footer">
            <button className="btn next" onClick={nextStep}>
              Next
            </button>
            <button
              className="btn back"
              onClick={prevStep}
              disabled={step === 1}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="step-4">
          <div className="subtitle-2">
            Let's Test And Train Your AI Module Further.
            <br /> Provide a prompt below and further train the AI module after
            each prompt. Click Save Module when ready.
          </div>
          <textarea className="black-board">DUMMY TEXT FROM CHATGPT</textarea>
          <div className="area">
            <textarea className="gray-board"></textarea>
            <div className="icon" />
          </div>

          <div className="btn">Save Module</div>
        </div>
      )}
      <input type="file" ref={upload} className="none" />
    </Layout>
  );
};

export default Module;
