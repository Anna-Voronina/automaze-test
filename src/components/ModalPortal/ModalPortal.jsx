"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export const ModalPortal = ({ children }) => {
  const portalRootRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRootRef.current = document.querySelector("#modal-portal");
    setMounted(true);
  }, []);

  return mounted && portalRootRef.current
    ? createPortal(<>{children}</>, portalRootRef.current)
    : null;
};

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
};
