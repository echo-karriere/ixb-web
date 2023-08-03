import { HeadSEO } from "../../components/common/functions/HeadSEO";
import React, { useEffect, useState } from "react";
import EditAccount from "../../components/pluss/editAccount";

export default function Plus() {
  // Changed the function name to 'Plus'
  const [userName, setUserName] = useState("");
  const [isPlus, setIsPlus] = useState(false);

  useEffect(() => {
    const userNameFromLocalStorage = localStorage.getItem("userName") || "";
    setUserName(userNameFromLocalStorage);
    if (localStorage.getItem("userName") && localStorage.getItem("userPIN")) {
      setIsPlus(true);
    }
  }, []);

  return (
    <>
      <HeadSEO
        title="ITxBERGEN PLUSS+"
        description="Rediger din PLUSS+ konto."
        canonical="/pluss/edit"
      />

      <main>
        <div className="max-w-7xl w-11/12 mt-6 md:mt-10 mx-auto">
          <div className="max-w-3xl">
            {isPlus ? (
              <EditAccount />
            ) : (
              <>
                <p>Access Denied</p>
              </>
            )}
          </div>

          <br />
        </div>
      </main>
    </>
  );
}
