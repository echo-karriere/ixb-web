import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";


function GradeCalculator() {
  const [grades, setGrades] = useState({});
  const [weights, setWeights] = useState({});
  const [result, setResult] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  const gradesArray = ["E", "D", "C", "B", "A", "Bestått"];
  const [gradeCount, setGradeCount] = useState(1);
  const [totalWeight, setTotalWeight] = useState(0);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name.includes("grade")) {
      setGrades({ ...grades, [name]: value });
    } else if (name.includes("weight")) {
      setWeights({ ...weights, [name]: value });
    } else {
      setSelectedGrade(gradesArray[value - 1]);
    }
  }

  function addGrade() {
    setGradeCount((prevCount) => prevCount + 1);
  }

  function setCalculatedResult(result, callback) {
    setResult(result);
    callback(result);
  }

  function calculate() {
    let totalGrade = 0;
    let totalWeight = 0;
    Object.keys(grades).forEach((grade) => {
      totalGrade +=
        parseFloat(grades[grade]) *
        parseFloat(weights[grade.replace("grade", "weight")]);
      totalWeight += parseFloat(weights[grade.replace("grade", "weight")]);
    });
    setTotalWeight(totalWeight);
    setCalculatedResult(
      (totalGrade / totalWeight).toFixed(2),
      setSelectedGradeBasedOnResult
    );
  }

  function setSelectedGradeBasedOnResult(result) {
    if (result >= 4.5) {
      setSelectedGrade("A");
    } else if (result >= 3.5) {
      setSelectedGrade("B");
    } else if (result >= 2.5) {
      setSelectedGrade("C");
    } else if (result >= 1.5) {
      setSelectedGrade("D");
    } else if (result >= 0.5) {
      setSelectedGrade("E");
    } else {
      setSelectedGrade("F");
    }
  }

  return (
    <>
      <div className="max-w-xl w-11/12 mx-auto mb-12 mt-6">
        <div>
          <div>
            <table className="table-auto border-collapse border max-w-xl w-full mx-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Emnekode</th>
                  <th className="px-4 py-2">Karakter</th>
                  <th className="px-4 py-2">Studiepoeng</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: gradeCount }, (_, i) => (
                  <tr key={i}>
                    <td className="border px-4 py-2">
                      <input
                        className="border rounded w-full p-1"
                        type="text"
                        aria-label="Skriv inn emnekode"
                        style={{ textTransform: "uppercase" }}
                        required
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <select
                        className="border rounded w-full p-1"
                        name={`grade${i + 1}`}
                        onChange={handleChange}
                        aria-label="Velg bokstavkarakter mellom A og E"
                        required>
                        <option value="0" disabled selected>
                          Velg karakter
                        </option>
                        <option aria-label="Karakter A" value="5">
                          A{" "}
                        </option>
                        <option aria-label="Karakter B" value="4">
                          B
                        </option>
                        <option aria-label="Karakter C" value="3">
                          C
                        </option>
                        <option aria-label="Karakter D" value="2">
                          D
                        </option>
                        <option aria-label="Karakter E" value="1">
                          E
                        </option>
                      </select>
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        className="border rounded w-full p-1"
                        type="text"
                        name={`weight${i + 1}`}
                        onChange={handleChange}
                        aria-label="Skriv inn antall studiepoeng. Bruk punktum og ikke komma hvis du skal regne ut studiepoeng med desimaltall."
                        required
                        // numeric only, but allow decimal and comma
                        //   onKeyPress={(e) => {
                        //     if (
                        //       !/[0-9.,]/.test(e.key) ||
                        //       (e.key === "." && e.target.value.includes("."))
                        //     )
                        //     {
                        //       e.preventDefault();
                        //     }
                        //   }}

                        // do same but change , to .
                        onKeyPress={(e) => {
                          if (
                            !/[0-9.]/.test(e.key) ||
                            (e.key === "." && e.target.value.includes("."))
                          ) {
                            e.preventDefault();
                          }
                        }}
                        inputMode="numeric"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <small aria-hidden className="text-gray-500">
          Bruk punktum og ikke komma hvis du skal regne ut studiepoeng med
          desimaltall.
        </small>
        <div className="text-center w-full mx-auto m-4">
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full"
            onClick={addGrade}
            // LEGG TIL EMNE OG SI HVOR MANGE EMNER SOM ER LAGT TIL:
            aria-label="Legg til emne">
            <i aria-label="Legg til emne" class="ri-add-fill"></i>
          </button>

          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full ml-4"
            onClick={calculate}>
            <i aria-label="Regn ut snitt" class="ri-calculator-fill"></i>
          </button>
        </div>
        <div class="flex justify-center">
          <div class="text-center p-4 ">
            <div class="text-xl font-medium">{totalWeight || "0"}</div>
            <div class="text-base font-medium">Antall studiepoeng</div>
          </div>
          <div class="text-center p-4 ">
            <div class="text-xl font-medium">{result || "0.00"}</div>

            <div class="text-base font-medium">Numerisk snitt</div>
          </div>
          <div class="text-center p-4">
            <div class="text-xl font-medium">{selectedGrade || "A-E"}</div>
            <div class="text-base font-medium">Karaktersnitt</div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-8">Snittkalkulator</h1>
        <p>
          Denne snittkalkulatoren er laget for å hjelpe deg med å regne ut
          snittet ditt. Du kan legge til så mange emner du vil. Denne er ment
          for å være et hjelpemiddel, og gir et veiledende resultat. Resultatene
          dine blir ikke delt med noen, og regnes ut lokalt på enheten din.
        </p>
      </div>
    </>
  );
}

export default GradeCalculator;
