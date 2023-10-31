import React, { useState } from "react";
import ChevronLeft from "../../../assets/icons/ChevronLeft";
import ChevronRight from "../../../assets/icons/ChevronRight";
import Typography from "../../base/typography";
import SelectLabel from "../select-label";
import { IPaginationProps } from "./IPaginator";
import styles from "./Paginator.module.scss";
import { DOTS, dropDownOptions } from "./constant";
import { usePagination } from "./usePagination";

const Paginator: React.FC<IPaginationProps> = ({
  currentPage,
  handlePageChange,
  handleSelectChange,
  itemsPerPage: pageSize,
  isItemsPerPage = false,
  isPageSelection = false,
  leftArrow = <ChevronLeft />,
  rightArrow = <ChevronRight />,
  siblingCount = 0,
  totalRecords: totalCount,
  selectedOptions,
}) => {
  const { paginationRange, totalPageCount }: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const [error, setError] = useState({
    value: false,
    message: "",
  });

  const handlePagination = (offset: number) =>
    handlePageChange(currentPage + offset);

  let lastPage = paginationRange[paginationRange.length - 1];

  const numberInputOnWheelPreventChange = (e: any) => {
    e.target.blur();
    e.stopPropagation();
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  return (
    <div className={styles.container}>
      {isItemsPerPage && (
        <section className={styles.pageSizeContainer}>
          <SelectLabel
            value={selectedOptions}
            onChange={handleSelectChange}
            placeholder="Select Limit.."
            options={dropDownOptions}
            getOptionLabel={(option: any) => option.label}
            getOptionValue={(option: any) => option.value}
          />
        </section>
      )}
      <section className={styles.paginator}>
        <div
          className={`
          ${styles.icons}
        ${currentPage === 1 ? styles.disabled : ""}
        `}
          onClick={() => currentPage > 1 && handlePagination(-1)}
        >
          {leftArrow}
        </div>
        <div className={styles.badgeContainer}>
          {paginationRange.map((pageNumber: any, index: number) => {
            return (
              <span
                key={index}
                className={`
                ${styles.badge}
                ${
                  pageNumber === currentPage && pageNumber !== DOTS
                    ? styles.active
                    : ""
                }
                ${pageNumber === DOTS ? styles.dot : ""}
                `}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </span>
            );
          })}
        </div>
        <div
          className={`
          ${styles.icons}
          ${currentPage === lastPage ? styles.disabled : ""}
          `}
          onClick={() => !(currentPage === lastPage) && handlePagination(1)}
        >
          {rightArrow}
        </div>
      </section>
      {isPageSelection && (
        <section className={styles.pageSelection}>
          <div className={styles.subContainer}>
            <Typography>Go to page</Typography>
            <input
              type="number"
              onChange={(e) => {
                !e.target.validity.valid
                  ? setError({
                      value: true,
                      message: `Page Number must be between 1 and ${totalPageCount}`,
                    })
                  : setError({
                      value: false,
                      message: "",
                    });
                !!e.target.value && handlePageChange(parseInt(e.target.value));
              }}
              className={styles.input}
              onWheel={numberInputOnWheelPreventChange}
              max={totalPageCount}
              min={1}
            />
          </div>
          <span
            className={[
              styles.error,
              !error.value && styles.errorVisibility,
            ].join(" ")}
          >
            {error.message || <>&nbsp;</>}
          </span>
        </section>
      )}
    </div>
  );
};

export default Paginator;
