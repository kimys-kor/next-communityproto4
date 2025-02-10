import { useState, useCallback, useEffect } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
};

const SelectBox: React.FC<SelectProps> = ({
  options,
  onChange,
  defaultValue = "",
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  // 메모이제이션된 onChange 함수
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedValue(value);
      onChange(value);
    },
    [onChange] // onChange가 변경될 때만 함수를 새로 생성
  );

  // defaultValue가 변경될 때 selectedValue 업데이트
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className="relative w-24 md:w-32 h-[1.75rem]">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-full h-full box-border block text-sm border border-gray-300 text-slate-500 rounded-lg focus:ring-blue focus:border-blue"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
