package com.FPSc.dto;

import java.util.List;

public class UqResponse<T> {
    private List<T> content;
    private int totalPages;
    private int currentPage;

    public UqResponse(List<T> content, int totalPages, int currentPage) {
        this.content = content;
        this.totalPages = totalPages;
        this.currentPage = currentPage;
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }
}