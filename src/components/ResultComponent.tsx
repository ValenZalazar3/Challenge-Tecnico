interface ResultComponentProps {
    result: number[] | undefined;
}

export const ResultComponent = ({ result }: ResultComponentProps) => {
    return (
        <div>
            {!result ? (
                <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-gray-100 border mt-4 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[23rem] md:w-[30rem] p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value="Tu resultado se muestra aquí 😎"
                    disabled
                    readOnly
                />
            ) : result.length > 0 ? (
                <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-gray-100 border mt-4 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[23rem] md:w-[30rem] p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={`Los pares son: ${result}`}
                    disabled
                    readOnly
                />
            ) : (
                <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-gray-100 border mt-4 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[23rem] md:w-[30rem] p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value="No se encontró coincidencia 😓"
                    disabled
                    readOnly
                />
            )}
        </div>
    );
};
