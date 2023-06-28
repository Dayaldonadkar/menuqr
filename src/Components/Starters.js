import React, { useState } from "react";

const Starters = () => {
  return (
    <div>
      <div>
        <div className="py-3">
          <p className="flex justify-center">VEG</p>

          <div className="text-[#854D0E] px-5 uppercase space-y-6">
            <div className="flex justify-between">
              <div className="w-2/3">
                <p>PANNER 65</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 230</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>PANNER 35</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 250</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>PANNER 77</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 280</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>PANNER CRISPY</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 210</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                {" "}
                <p>FLOWER LAMBA</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 290</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                {" "}
                <p>CHILLY PANNER</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 170</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                {" "}
                <p>PANNER MANCHURIAN</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 150</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                {" "}
                <p>CHILLY CHANA</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 140</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>VEG CRISPY</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 140</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHILLY POTATO</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 150</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>VEG MANCGURIAN</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 140</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHANA MANCHURIAN</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 130</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>GOBI MANCHURIAN</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 140</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CRISPY BABYCORN</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 180</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>MUSHROOM BABYCORN</p>
                <p className="text-xs">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 200</p>
            </div>
          </div>
        </div>

        <div className="py-3">
          <h2 className="flex justify-center py-3">NON VEG</h2>

          <div className="text-[#854D0E] px-5  uppercase space-y-6">
            <div className="flex justify-between">
              <div className="flex space-x3">
                <img
                  className="w-40 h-28"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="w-[20%]">
                  <p>CHILLY CHICKEN</p>
                  <p className="text-xs text-[#000]  font-medium italic font-hel">
                    lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                  </p>
                </div>
              </div>
              <p
                className="w-1/4 flex justify-end
              "
              >
                ₹ 230
              </p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN MANCHURIAN</p>
                <p className="text-xs text-[#000]  font-semibold italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 230</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN CRISPY</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 240</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN LOLLIPOP</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 270</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>FISH CHILLY</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 250</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>FISH MANCHURIAN</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 270</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN 65</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 250</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN 77</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 250</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN 35</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 290</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN LAMBA</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 250</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN LAMBA SPL</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 330</p>
            </div>

            <div className="flex justify-between">
              <div className="w-2/3">
                <p>CHICKEN CHAKI</p>
                <p className="text-xs text-[#000]  font-thin italic font-hel">
                  lore, ipsum lorem ipsum lorem ipusm jsksfkjsak
                </p>
              </div>
              <p>₹ 400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starters;
