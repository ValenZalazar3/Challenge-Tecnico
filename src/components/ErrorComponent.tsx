interface ErrorsPros {
  isInvalid: string | undefined;
}

export const ErrorComponent = ({ isInvalid }: ErrorsPros) => {
  return (
    <div>
      {" "}
      {isInvalid ? (
        <p className="text-red-500 absolute -mt-4">{isInvalid}</p>
      ) : undefined}
    </div>
  );
};
