package data.service;

import data.dto.BoardDto;

import java.util.List;
import java.util.Map;

public interface BoardServiceInter {
    public int getTotalCount();                                       // 게시글 총 개수
    public void insertBoard(BoardDto dto);                            // 게시글 등록
    public List<BoardDto> getPagingList(int start, int perpage);      // 게시글 목록
    public void updateReadcount(int num);                             // 게시글 조회수 증가
    public BoardDto detailPage(int num);                              // 게시글 상세보기
    public void deleteBoard(int num);                                 // 게시글 삭제
}
