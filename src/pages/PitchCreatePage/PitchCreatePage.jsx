import React, { useState } from "react";
import Input1 from "../../components/InputComponet/InputComponent1";
import Select from "../../components/SelectComponent/SelectComponent";
import SelectTime from "../../components/SelectComponent/SelectTime";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { GoPlusCircle } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
const FootballFieldForm = () => {
  const [fieldName, setFieldName] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [fieldTypes, setFieldTypes] = useState([
    {
      pitch_type: 2,
      quantity: 1,
      description: "",
      timeSlots: [],
    },
  ]);
  const [description, setDescription] = useState("");
  const [pricingOptions, setPricingOptions] = useState([{ price: "" }]);
  const [pricingList, setPricingList] = useState([
    { price: "", checked: false },
  ]);

  const addFieldType = () => {
    setFieldTypes([
      ...fieldTypes,
      {
        pitch_type: "",
        quantity: "",
        description: "",
        timeSlots: [],
      },
    ]);
  };
  const removeFieldType = (fieldIndex) => {
    const newFieldTypes = [...fieldTypes];
    newFieldTypes.splice(fieldIndex, 1);
    setFieldTypes(newFieldTypes);
  };
  const addTimeSlot = (index) => {
    const newFieldTypes = [...fieldTypes];
    var a = 5;
    if (newFieldTypes[index].timeSlots.length)
      a = parseInt(
        newFieldTypes[index].timeSlots[
          newFieldTypes[index].timeSlots.length - 1
        ].endHour
      );
    var b = 0;
    if (newFieldTypes[index].timeSlots.length)
      b = parseInt(
        newFieldTypes[index].timeSlots[
          newFieldTypes[index].timeSlots.length - 1
        ].endMinute
      );
    newFieldTypes[index].timeSlots.push({
      startHour: a,
      startMinute: b,
      endHour: (a + 2) % 24,
      endMinute: b,
      price: "",
    });
    setFieldTypes(newFieldTypes);
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const newFieldTypes = [...fieldTypes];
    newFieldTypes[index][name] = value;
    setFieldTypes(newFieldTypes);
  };

  const handleTimeSlotChange = (fieldIndex, slotIndex, event) => {
    const { name, value } = event.target;
    const newFieldTypes = [...fieldTypes];
    newFieldTypes[fieldIndex].timeSlots[slotIndex][name] = value;
    setFieldTypes(newFieldTypes);
  };
  const renderHoursOptions = () => {
    const hours = [];
    var a = {};
    for (let i = 0; i < 24; i++) {
      a = {};
      a.value = i;
      a.label = i < 10 ? `0${i}` : i;
      hours.push(a);
    }
    return hours;
  };

  const renderMinutesOptions = () => {
    const minutes = [];
    let a = {};
    for (let i = 0; i < 60; i += 5) {
      a = {};
      a.value = i;
      a.label = i < 10 ? `0${i}` : i;
      minutes.push(a);
    }
    return minutes;
  };
  const handlePricingChange = (index, event) => {
    const { value } = event.target;
    const newPricingOptions = [...pricingOptions];
    newPricingOptions[index].price = value;
    setPricingOptions(newPricingOptions);
  };
  const handleCheckboxChange = (index) => {
    const newPricingList = [...pricingList];
    newPricingList[index].checked = !newPricingList[index].checked;
    setPricingList(newPricingList);
  };

  const handleAddPricing = () => {
    setPricingList([...pricingList, { price: "", checked: false }]);
  };
  const removeTimeSlot = (fieldIndex, slotIndex) => {
    const newFieldTypes = [...fieldTypes];
    newFieldTypes[fieldIndex].timeSlots.splice(slotIndex, 1);
    setFieldTypes(newFieldTypes);
  };

  return (
    <div className="container mx-auto mt-16 max-w-[1170px]">
      <h1 className="text-2xl font-semibold mb-4 text-center">Tạo Sân Bóng</h1>
      <div className="mb-8">
        <Input1
          label="Tên sân"
          type="text"
          id="fieldName"
          name="fieldName"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </div>
      {/* Địa chỉ */}
      <div className="mb-8">
        <div className="flex justify-between gap-4 mb-4">
          <Select
            value={district}
            label="Thành phố/Huyện"
            options={[
              { value: "1", label: "Thành phố Thái Nguyên" },
              { value: "2", label: "Thành phố Sông Công" },
              { value: "3", label: "Thành phố Phổ Yên" },
              { value: "4", label: "Đại Từ" },
              { value: "5", label: "Định Hóa" },
              { value: "6", label: "Phú Bình" },
              { value: "7", label: "Võ Nhai" },
              { value: "8", label: "Đồng Hỷ" },
              { value: "9", label: "Phú Lương" },
            ]}
            onChange={(e) => setDistrict(e.target.value)}
            className="border border-gray-400 px-4 py-2 flex-1 mr-2"
          />
          <Select
            value={ward}
            label="Phường/Xã"
            onChange={(e) => setWard(e.target.value)}
            options={[
              { value: "1", label: "Huống Thượng" },
              { value: "2", label: "Kha Sơn" },
              { value: "3", label: "Kim Phượng" },
              { value: "4", label: "Đại Từ" },
              { value: "5", label: "Định Hóa" },
              { value: "6", label: "Phú Bình" },
              { value: "7", label: "Võ Nhai" },
              { value: "8", label: "Đồng Hỷ" },
              { value: "9", label: "Phú Lương" },
            ]}
            className="border mb-4 border-gray-400 px-4 py-2 flex-1"
          />

          <Input1
            label="Địa chỉ cụ thể"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full"
          />
        </div>
        <Input1
          label="Link Google Map"
          type="text"
          value={mapLink}
          onChange={(e) => setMapLink(e.target.value)}
        />
      </div>
      {/* Loại sân */}
      <div className="mb-8">
        <h1 className="text-xl font-medium mb-4">Danh sách sân</h1>
        {fieldTypes.map((field, index) => (
          <div key={index} className="mb-2 border px-10 py-8 rounded relative">
            <div className="flex justify-between gap-4 mb-2">
              <Select
                label="Loại sân"
                value={field.pitch_type}
                name="pitch_type"
                options={[
                  { value: "1", label: "Sân 5" },
                  { value: "2", label: "Sân 7" },
                  { value: "3", label: "Sân 11" },
                ]}
                onChange={(e) => handleFieldChange(index, e)}
                className="border border-gray-400 px-4 py-2 mr-2"
              />
              <Input1
                label="Số lượng"
                type="number"
                value={field.quantity}
                name="quantity"
                onChange={(e) => handleFieldChange(index, e)}
                placeholder="Số Lượng"
              />
              <Input1
                label="Mô tả"
                type="text"
                value={field.description}
                name="description"
                onChange={(e) => handleFieldChange(index, e)}
                placeholder="Mô Tả"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-16">
              {field.timeSlots.map((slot, slotIndex) => (
                <div key={slotIndex} className="flex gap-4 mb-4 items-center">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center text-lg border rounded-md shadow p-2 relative">
                      <SelectTime
                        value={slot.startHour}
                        name="startHour"
                        onChange={(e) =>
                          handleTimeSlotChange(index, slotIndex, e)
                        }
                        options={renderHoursOptions()}
                      />
                      <span className="pointer-events-none">:</span>
                      <SelectTime
                        value={slot.startMinute}
                        name="startMinute"
                        options={renderMinutesOptions()}
                        onChange={(e) =>
                          handleTimeSlotChange(index, slotIndex, e)
                        }
                      />
                      <FaRegClock />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center text-lg border rounded-md shadow p-2 relative">
                      <SelectTime
                        value={slot.endHour}
                        name="endHour"
                        options={renderHoursOptions()}
                        onChange={(e) =>
                          handleTimeSlotChange(index, slotIndex, e)
                        }
                      />
                      <span className="pointer-events-none">:</span>
                      <SelectTime
                        value={slot.endMinute}
                        name="endMinute"
                        options={renderMinutesOptions()}
                        onChange={(e) =>
                          handleTimeSlotChange(index, slotIndex, e)
                        }
                      />
                      <FaRegClock />
                    </div>
                  </div>
                  <Input1
                    type="text"
                    value={slot.price}
                    name="price"
                    placeholder="Giá"
                    onChange={(e) => handleTimeSlotChange(index, slotIndex, e)}
                  />
                  <div className="p-2 shrink-0 cursor-pointer hover:text-red-700 transition">
                    <MdOutlineClose
                      onClick={() => removeTimeSlot(index, slotIndex)}
                      className="text-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              value="Thêm"
              className="flex gap-3 items-center bg-green-500 px-5 py-2 rounded text-white"
              onClick={() => addTimeSlot(index)}
            >
              Thêm khoảng thời gian
              <GoPlusCircle />
            </button>
            <div className="p-2 shrink-0 cursor-pointer hover:text-red-700 transition absolute top-1 right-1">
              <MdOutlineClose
                onClick={() => removeFieldType(index)}
                className="text-2xl"
              />
            </div>
          </div>
        ))}
        <button
          className="flex gap-3 items-center bg-green-500 px-5 py-2 rounded text-white"
          onClick={addFieldType}
        >
          Thêm Loại Sân
          <GoPlusCircle />
        </button>
      </div>
      {/* Ô điền mô tả */}
      <div className="mb-4">
        <label htmlFor="description" className="block">
          Mô Tả:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-400 px-4 py-2 w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-4 items-center">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary rounded"
          />
          <span className="label-text">Nước đá</span>
          <div className="div">
            <input
              type="number"
              id="priceService"
              // value={priceService}
              // onChange={onChange}
              placeholder="Giá"
              // name={name}
              className="border border-gray-300 outline-none shadow p-2 w-full rounded focus:border-[#13357b] transition-all"
            />
          </div>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-4 items-center">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary rounded"
          />
          <span className="label-text">Nước đá</span>
          <div className="div">
            <input
              type="number"
              id="priceService"
              // value={priceService}
              // onChange={onChange}
              placeholder="Giá"
              // name={name}
              className="border border-gray-300 outline-none shadow p-2 w-full rounded focus:border-[#13357b] transition-all"
            />
          </div>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-4 items-center">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary rounded"
          />
          <span className="label-text">Nước đá</span>
          <div className="div">
            <input
              type="number"
              id="priceService"
              // value={priceService}
              // onChange={onChange}
              placeholder="Giá"
              // name={name}
              className="border border-gray-300 outline-none shadow p-2 w-full rounded focus:border-[#13357b] transition-all"
            />
          </div>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-4 items-center">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary rounded"
          />
          <span className="label-text">Nước đá</span>
          <div className="div">
            <input
              type="number"
              id="priceService"
              // value={priceService}
              // onChange={onChange}
              placeholder="Giá"
              // name={name}
              className="border border-gray-300 outline-none shadow p-2 w-full rounded focus:border-[#13357b] transition-all"
            />
          </div>
        </label>
      </div>
      <ButtonComponent
        label="Tạo"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-3 text-center w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      />
    </div>
  );
};

export default FootballFieldForm;
