import { HeadSEO } from "../../components/common/functions/HeadSEO";
import React, { useEffect, useState } from "react";
import EditAccount from "../../components/pluss/editAccount";
import secureLocalStorage from "react-secure-storage";

export default function Plus() {
  const [, setUserName] = useState("");
  const [isPlus, setIsPlus] = useState(false);

  useEffect(() => {
    const userNameFromLocalStorage =
      secureLocalStorage.getItem("userName")?.toString() ?? "";
    setUserName(userNameFromLocalStorage);
    if (
      secureLocalStorage.getItem("userName") &&
      secureLocalStorage.getItem("userPIN")
    ) {
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
                <small>Feilmelding: AC-300</small>
              </>
            )}
          </div>

          <br />
        </div>
      </main>
    </>
  );
}
