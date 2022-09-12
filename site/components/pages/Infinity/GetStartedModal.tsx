import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Trans, t } from "@lingui/macro";
import { urls } from "@klimadao/lib/constants";
import { Text } from "@klimadao/lib/components";
import { Modal } from "components/Modal";
import hiker from "public/hiker.jpg";
import net from "public/net.jpg";
import building from "public/building.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as styles from "./styles";

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const GetStartedModal = (props: Props) => {
  return (
    <Modal
      onToggleModal={() => props.setShowModal(false)}
      showModal={props.showModal}
      closeOnBackgroundClick={true}
      title={t({
        id: "shared.get_started",
        message: "Get Started",
      })}
    >
      <div className={styles.modalContainer}>
        <Link href={urls.creolBusinessCalculator}>
          <a className={styles.modalButtonContainer}>
            <div className="overlay" />
            <Image
              src={building}
              layout="fill"
              objectFit="cover"
              alt="building windows"
              className="image"
            />
            <Text t="h3" className="text">
              <Trans id="infinity.getStartedModal_business">
                I'm a <br />
                business.
              </Trans>
              <ArrowForwardIcon fontSize="inherit" />
            </Text>
          </a>
        </Link>
        <Link href={urls.creolIndividualCalculator}>
          <a className={styles.modalButtonContainer}>
            <div className="overlay" />
            <Image
              src={hiker}
              layout="fill"
              objectFit="cover"
              alt="hiker"
              className="image"
            />
            <Text t="h3" className="text">
              <Trans id="infinity.getStartedModal_individual">
                I'm an
                <br />
                individual.
              </Trans>
              <ArrowForwardIcon fontSize="inherit" />
            </Text>
          </a>
        </Link>
        <Link href={urls.cryptoOffsetCalculator}>
          <a className={styles.modalButtonContainer}>
            <div className="overlay" />
            <Image
              src={net}
              layout="fill"
              objectFit="cover"
              alt="net"
              className="image"
            />
            <Text t="h3" className="text">
              <Trans id="infinity.getStartedModal_offsetCrypto">
                I want to
                <br />
                offset crypto.
              </Trans>
              <ArrowForwardIcon fontSize="inherit" />
            </Text>
          </a>
        </Link>
        <Link href={urls.klimaInfinityContactForm}>
          <a>
            <Text t="body6" className={styles.modalLink}>
              <Trans id="infinity.getStartedModal_notSure">
                I'm not sure which option is for me.
              </Trans>
            </Text>
          </a>
        </Link>
      </div>
    </Modal>
  );
};

export default GetStartedModal;