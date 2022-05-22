-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: bankapp
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agent`
--

DROP TABLE IF EXISTS `agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agent` (
  `Agent_ID` char(10) NOT NULL,
  `Name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Agent_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agent`
--

LOCK TABLES `agent` WRITE;
/*!40000 ALTER TABLE `agent` DISABLE KEYS */;
INSERT INTO `agent` VALUES ('00001','S.Raman'),('00002','T.Laxman'),('00003','T.Barathan'),('00004','S.Kugan'),('00005','M.Ravanan'),('00006','S.Hanuman'),('00007','K.Kathir'),('00008','S.Seetha'),('00009','T.vaali'),('00010','N.Kumar');
/*!40000 ALTER TABLE `agent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `centralized_account`
--

DROP TABLE IF EXISTS `centralized_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centralized_account` (
  `Account_No` char(10) NOT NULL,
  `Balance` decimal(8,2) DEFAULT NULL,
  `Account_Type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Account_No`),
  KEY `Account_Type` (`Account_Type`),
  CONSTRAINT `centralized_account_ibfk_1` FOREIGN KEY (`Account_Type`) REFERENCES `interest` (`Account_Type`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centralized_account`
--

LOCK TABLES `centralized_account` WRITE;
/*!40000 ALTER TABLE `centralized_account` DISABLE KEYS */;
INSERT INTO `centralized_account` VALUES ('222428',10000.00,'SA_C'),('222430',20000.00,'SA_A'),('222432',35000.00,'SA_T'),('222434',38000.00,'FD_ONE'),('222436',18000.00,'SA_C');
/*!40000 ALTER TABLE `centralized_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `Customer_ID` char(10) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Account_Type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Customer_ID`),
  KEY `Account_Type` (`Account_Type`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`Account_Type`) REFERENCES `interest` (`Account_Type`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('10000','T.Sasikumar','sasi','Sasi@123','SA_T'),('10001','S.Arun','arun','Ar@mmm','SA_C'),('10002','M.Kavin','kaviya','Kavikavi#12','FD_ONE'),('10003','M.Manoj','manoj','Manoj@1212','FD_SIX'),('10004','T.Sudhakar','sudha','Susudha@123','SA_S'),('10005','S.Nivetha','nivi','Niviarun@123','SA_A'),('10006','K.Srija','srija','srisri@1212','SA_A'),('10007','S.Anirudh','ani','Anirudh@123','SA_A');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest` (
  `Account_Type` varchar(10) NOT NULL,
  `Rate` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`Account_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES ('FD_ONE',14),('FD_SIX',13),('FD_THREE',15),('SA_A',10),('SA_C',12),('SA_J',7),('SA_S',13),('SA_T',11);
/*!40000 ALTER TABLE `interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `local_account`
--

DROP TABLE IF EXISTS `local_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `local_account` (
  `Agent_ID` char(10) NOT NULL,
  `Account_No` char(10) NOT NULL,
  `Balance` decimal(8,2) DEFAULT NULL,
  `Last_Update_Time` date DEFAULT NULL,
  PRIMARY KEY (`Agent_ID`,`Account_No`),
  KEY `Account_No` (`Account_No`),
  CONSTRAINT `local_account_ibfk_1` FOREIGN KEY (`Agent_ID`) REFERENCES `agent` (`Agent_ID`) ON DELETE CASCADE,
  CONSTRAINT `local_account_ibfk_2` FOREIGN KEY (`Account_No`) REFERENCES `centralized_account` (`Account_No`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `local_account`
--

LOCK TABLES `local_account` WRITE;
/*!40000 ALTER TABLE `local_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `local_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `Transaction_ID` char(10) NOT NULL,
  `Agent_ID` varchar(10) DEFAULT NULL,
  `Account_No` char(10) DEFAULT NULL,
  `Transaction_Type` varchar(8) DEFAULT NULL,
  `Amount` decimal(9,4) DEFAULT NULL,
  PRIMARY KEY (`Transaction_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-22 10:50:41
